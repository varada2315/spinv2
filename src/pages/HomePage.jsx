import React from 'react';
import HeroSection from '../components/HeroSection';
import BannerIntro from '../components/BannerIntro';
import PopularEscapes from '../components/PopularEscapes';
import IndiaHolidays from '../components/IndiaHolidays';
import WhosComing from '../components/WhosComing';
import WhyChooseSpinGlobal from '../components/WhyChooseSpinGlobal';
import CustomerReviews from '../components/CustomerReviews';
import SocialConnect from '../components/SocialConnect';
import AutoEnquiryModal from '../components/AutoEnquiryModal';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, ShieldCheck, MapPin } from 'lucide-react';
import './Pages.css';

export default function HomePage({ onOpenDestination, onOpenInquiry, onToast }) {
  return (
    <div className="page-view home-page-view">
      {/* Automatic Premium Concierge Enquiry Modal (Appears 35s or 45% scroll) */}
      <AutoEnquiryModal onSubmitted={onToast} />

      {/* Hero Banner & Taglines */}
      <HeroSection onOpenInquiry={onOpenInquiry} />
      <BannerIntro />

      {/* Featured 4 International Destinations + Explore More button */}
      <PopularEscapes limit={4} showExploreMore={true} onSelectDestination={(slug) => onOpenDestination(slug)} />

      {/* Featured 4 Domestic Destinations + Explore More button */}
      <IndiaHolidays limit={4} showExploreMore={true} onSelectIndiaRegion={(slug) => onOpenDestination(slug)} />

      {/* Who's Coming Along — Traveller Type Selector */}
      <WhosComing onOpenInquiry={onOpenInquiry} />

      {/* Featured Travel Services Quick Overview */}
      <section className="home-services-summary container">
        <div className="section-heading-center">
          <span className="section-badge">Explore Our Solutions</span>
          <h2 className="main-section-title">Everything You Need For Seamless Travel</h2>
          <p className="section-subtitle">From international getaways to domestic expeditions and visa approvals.</p>
        </div>

        <div className="home-services-grid">
          <div className="home-service-card">
            <div className="service-card-icon"><Globe size={28} color="#00BF63" /></div>
            <h3>International Holidays</h3>
            <p>22+ Handpicked overseas travel packages tailored to your preferences & budget.</p>
            <Link to="/international" className="card-link-btn">
              <span>View International</span> <ArrowRight size={16} />
            </Link>
          </div>

          <div className="home-service-card">
            <div className="service-card-icon"><MapPin size={28} color="#00BF63" /></div>
            <h3>Incredible Bharat (Domestic)</h3>
            <p>Explore Kashmir, Leh Ladakh, Rajasthan, Goa, Kerala & 8 top Indian destinations.</p>
            <Link to="/domestic" className="card-link-btn">
              <span>Explore Domestic</span> <ArrowRight size={16} />
            </Link>
          </div>

          <div className="home-service-card">
            <div className="service-card-icon"><ShieldCheck size={28} color="#00BF63" /></div>
            <h3>Visa Assistance</h3>
            <p>Hassle-free Tourist, Visitor & Business visa processing for 20+ countries worldwide.</p>
            <Link to="/visas" className="card-link-btn">
              <span>Explore Visas</span> <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us & Customer Care */}
      <WhyChooseSpinGlobal />

      {/* Google 4.9/5 Verified Customer Reviews Auto Slider */}
      <CustomerReviews />

      {/* Find Us On Social Media Section */}
      <SocialConnect />
    </div>
  );
}
