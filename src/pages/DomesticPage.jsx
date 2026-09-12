import React from 'react';
import IndiaHolidays from '../components/IndiaHolidays';
import { ArrowRight, MapPin, Compass } from 'lucide-react';
import '../components/HeroSection.css';
import './Pages.css';

export default function DomesticPage({ onOpenDestination, onOpenInquiry }) {
  const handleCustomPackageClick = () => {
    if (onOpenInquiry) {
      onOpenInquiry({ category: 'domestic', destination: '', title: 'Custom Domestic Package' });
    }
  };

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
            poster={encodeURI('/images/Kashmir.jpg.jpeg')}
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
              onClick={() => onOpenInquiry && onOpenInquiry({ category: 'domestic' })}
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

      {/* Destinations Grid */}
      <IndiaHolidays showExploreMore={false} onSelectIndiaRegion={(slug) => onOpenDestination(slug)} />

      {/* Beyond These Destinations - Custom Package Box */}
      <section className="beyond-destinations-section">
        <div className="container">
          <div className="beyond-destinations-box">
            <div className="beyond-destinations-content">
              <span className="beyond-badge">
                <Compass size={13} color="#00BF63" />
                <span>Custom Itineraries</span>
              </span>
              <h2 className="beyond-title">Beyond These Destinations</h2>
              <p className="beyond-subtitle">
                Pan-India travel, tailored to you. Tell us where you dream of going.
              </p>
            </div>

            <div className="beyond-actions">
              <button 
                className="beyond-cta-btn hover-lift"
                onClick={handleCustomPackageClick}
                aria-label="Get Your Custom Package"
              >
                <span>Get Your Custom Package</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
