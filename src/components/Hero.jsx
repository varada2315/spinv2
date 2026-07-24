import React from 'react';
import { Compass, ArrowRight, Plane, Sparkles } from 'lucide-react';
import './Hero.css';

export default function Hero({ onExploreClick }) {
  return (
    <section className="hero-section">
      {/* Background Image Container with Overlay */}
      <div className="hero-bg-overlay">
        <img
          src="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=2000&q=85"
          alt="Santorini Scenic Coastline - Spin Global Travel"
          className="hero-bg-image"
        />
        <div className="hero-gradient-mask" />
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          {/* Tagline Badge */}
          <div className="hero-badge">
            <Plane size={14} className="hero-plane-icon" />
            <span>EXPLORE. DREAM. DISCOVER.</span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-title">
            Discover Amazing <br />
            <span className="script-font hero-script">Places with Us</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle">
            Find the best tours, hotels and flights: everything you need for the perfect trip with Spin Global.
          </p>

          {/* CTA Action Button */}
          <div className="hero-cta-wrap">
            <button className="hero-cta-btn" onClick={onExploreClick}>
              <span>Explore Now</span>
              <div className="btn-arrow-circle">
                <ArrowRight size={16} />
              </div>
            </button>

            {/* Micro Badge Guarantee */}
            <div className="hero-micro-tag">
              <Sparkles size={16} color="#FFAB00" />
              <span>Over 10,000+ Happy Travelers This Month</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
