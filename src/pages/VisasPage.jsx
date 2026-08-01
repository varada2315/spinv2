import React from 'react';
import VisaServicesSection from '../components/VisaServicesSection';
import FaqSection from '../components/FaqSection';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import '../components/HeroSection.css';

export default function VisasPage({ onOpenInquiry }) {
  return (
    <div className="page-view visas-page-view">
      {/* Full-Screen Home-Style Hero Section for Visas Page */}
      <section className="hero-section visas-hero-section">
        {/* Background Video Layer */}
        <div className="hero-video-container">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            poster="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1600&q=80"
            className="hero-video-bg"
          >
            <source src="/videos/visas-hero.mp4" type="video/mp4" />
            <source src={encodeURI("/images/visa page.mp4")} type="video/mp4" />
          </video>
          <div className="hero-video-overlay" />
        </div>

        <div className="container hero-content-wrapper">
          <div className="hero-badge">
            <ShieldCheck size={14} color="#00BF63" />
            <span>GLOBAL VISA ASSISTANCE</span>
          </div>

          <h1 className="hero-headline">
            Fast, Hassle-Free <span className="text-green-highlight">Visa Services</span>
          </h1>

          <p className="hero-subtext">
            Collect stamps, not stress — Expert guidance for Tourist, Business, Work & Transit visas across 20+ top international destinations.
          </p>

          <div className="hero-cta-group">
            <button 
              className="btn-primary hero-main-btn"
              onClick={() => onOpenInquiry({ category: 'visa', title: 'Visa Application Assistance' })}
            >
              <span>Apply For Visa Now</span>
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Visa Trust Indicators Bar */}
          <div className="hero-trust-indicators">
            <div className="trust-item">
              <span className="trust-num">20+</span>
              <span className="trust-label">Global Destinations</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-item">
              <span className="trust-num">99.2%</span>
              <span className="trust-label">Visa Approval Rate</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-item">
              <span className="trust-num">End-to-End</span>
              <span className="trust-label">Document Assistance</span>
            </div>
          </div>
        </div>
      </section>

      {/* Visa Cards & Services Grid */}
      <VisaServicesSection onVisaClick={(item) => onOpenInquiry(item)} />

      {/* Visas Page FAQ Section */}
      <FaqSection initialCategory="Visas & Processing" />
    </div>
  );
}
