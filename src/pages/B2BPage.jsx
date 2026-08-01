import React from 'react';
import B2BPartnerSection from '../components/B2BPartnerSection';
import FaqSection, { B2B_SPIN_FAQS } from '../components/FaqSection';
import { ArrowRight, Briefcase } from 'lucide-react';
import '../components/HeroSection.css';

export default function B2BPage({ onOpenInquiry }) {
  return (
    <div className="page-view b2b-page-view">
      {/* Full-Screen Home-Style Hero Section for B2B Page */}
      <section className="hero-section b2b-hero-section">
        {/* Background Video Layer */}
        <div className="hero-video-container">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
            className="hero-video-bg"
          >
            <source src="/videos/b2b-hero.mp4" type="video/mp4" />
            <source src={encodeURI("/images/B2B page video.mp4")} type="video/mp4" />
          </video>
          <div className="hero-video-overlay" />
        </div>

        <div className="container hero-content-wrapper">
          <div className="hero-badge">
            <Briefcase size={14} color="#00BF63" />
            <span>TRAVEL AGENCY PORTAL</span>
          </div>

          <h1 className="hero-headline">
            B2B Visa <span className="text-green-highlight">Partnership</span>
          </h1>

          <p className="hero-subtext">
            Built to support your business — Reliable visa assistance for independent consultants, tour operators, and established travel agencies.
          </p>

          <div className="hero-cta-group">
            <button
              className="btn-primary hero-main-btn"
              onClick={() => onOpenInquiry({ category: 'b2b', title: 'B2B Partner Program' })}
            >
              <span>Become a Partner</span>
              <ArrowRight size={18} />
            </button>
          </div>

          {/* B2B Trust Indicators Bar */}
          <div className="hero-trust-indicators">
            <div className="trust-item">
              <span className="trust-num">100%</span>
              <span className="trust-label">Client Protection</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-item">
              <span className="trust-num">Wholesale</span>
              <span className="trust-label">B2B Visa Rates</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-item">
              <span className="trust-num">Dedicated</span>
              <span className="trust-label">B2B Partner Desk</span>
            </div>
          </div>
        </div>
      </section>

      {/* B2B Services Overview */}
      <B2BPartnerSection onPartnerClick={(item) => onOpenInquiry(item)} />

      {/* B2B Page Dedicated FAQ Section */}
      <FaqSection
        customFaqs={B2B_SPIN_FAQS}
        title="B2B Partnership FAQs"
        subtitle="Everything travel agencies, tour operators, and corporate partners need to know about our white-label B2B visa processing & partnership terms."
      />
    </div>
  );
}
