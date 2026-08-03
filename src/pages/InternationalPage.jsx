import React from 'react';
import InternationalHolidays from '../components/InternationalHolidays';
import { ArrowRight, Globe } from 'lucide-react';
import '../components/HeroSection.css';

export default function InternationalPage({ onOpenDestination, onOpenInquiry }) {
  return (
    <div className="page-view international-page-view">
      {/* Full-Screen Home-Style Hero Section for International Page */}
      <section className="hero-section international-hero-section">
        {/* Background Video Layer */}
        <div className="hero-video-container">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            poster="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80"
            className="hero-video-bg"
          >
            <source src="/videos/international-hero.mp4" type="video/mp4" />
          </video>
          <div className="hero-video-overlay" />
        </div>

        <div className="container hero-content-wrapper">
          <div className="hero-badge">
            <Globe size={14} color="#00BF63" />
            <span>WORLDWIDE ESCAPES</span>
          </div>

          <h1 className="hero-headline">
            International <span className="text-green-highlight">Holidays</span>
          </h1>

          <p className="hero-subtext">
            Click on any destination to view famous spots slideshow & enquiry form directly in a pop-up.
          </p>

          <div className="hero-cta-group">
            <button 
              className="btn-primary hero-main-btn"
              onClick={() => onOpenInquiry({ category: 'international', title: 'International Holiday Package' })}
            >
              <span>Plan My International Trip</span>
              <ArrowRight size={18} />
            </button>
          </div>

          {/* International Trust Indicators Bar */}
          <div className="hero-trust-indicators">
            <div className="trust-item">
              <span className="trust-num">20+</span>
              <span className="trust-label">Global Destinations</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-item">
              <span className="trust-num">100%</span>
              <span className="trust-label">Customized Packages</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-item">
              <span className="trust-num">24x7</span>
              <span className="trust-label">Concierge Assistance</span>
            </div>
          </div>
        </div>
      </section>

      <InternationalHolidays onSelectDestination={(slug) => onOpenDestination(slug)} />
    </div>
  );
}
