import React from 'react';
import IndiaHolidays from '../components/IndiaHolidays';
import { ArrowRight, MapPin } from 'lucide-react';
import '../components/HeroSection.css';

export default function DomesticPage({ onOpenDestination, onOpenInquiry }) {
  return (
    <div className="page-view domestic-page-view">
      {/* Full-Screen Home-Style Hero Section for Domestic Page */}
      <section className="hero-section domestic-hero-section">
        {/* Background Video Layer */}
        <div className="hero-video-container">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            webkit-playsinline="true"
            poster="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1600&q=80"
            className="hero-video-bg"
          >
            <source src="/videos/domestic-hero.mp4" type="video/mp4" />
            <source src={encodeURI("/images/domestic page 2 nd video (1).mp4")} type="video/mp4" />
          </video>
          <div className="hero-video-overlay" />
        </div>

        <div className="container hero-content-wrapper">
          <div className="hero-badge">
            <MapPin size={14} color="#00BF63" />
            <span>INCREDIBLE BHARAT</span>
          </div>

          <h1 className="hero-headline">
            Domestic <span className="text-green-highlight">Holidays</span>
          </h1>

          <p className="hero-subtext">
            Beyond every mountain, every coastline, and every culture lies a side of Bharat you've yet to discover.
          </p>

          <div className="hero-cta-group">
            <button 
              className="btn-primary hero-main-btn"
              onClick={() => onOpenInquiry({ category: 'domestic' })}
            >
              <span>Plan My Domestic Trip</span>
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Domestic Trust Indicators Bar */}
          <div className="hero-trust-indicators">
            <div className="trust-item">
              <span className="trust-num">8+ Iconic</span>
              <span className="trust-label">Indian Regions</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-item">
              <span className="trust-num">100%</span>
              <span className="trust-label">Customized Itineraries</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-item">
              <span className="trust-num">24x7</span>
              <span className="trust-label">On-Trip Assistance</span>
            </div>
          </div>
        </div>
      </section>

      <IndiaHolidays showExploreMore={false} onSelectIndiaRegion={(slug) => onOpenDestination(slug)} />
    </div>
  );
}
