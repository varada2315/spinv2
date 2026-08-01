import React, { useRef, useEffect } from 'react';
import { ArrowRight, Plane, Globe, Shield } from 'lucide-react';
import HeroSearchBar from './HeroSearchBar';
import './HeroSection.css';

export default function HeroSection({ onOpenInquiry }) {
  const whatsappLink = "https://wa.me/916284661722?text=Hello%20Spin%20Global!%20Let’s%20start%20planning%20my%20trip.%20I’m%20excited%20to%20explore%20the%20best%20travel%20options.";

  return (
    <section className="hero-section" id="home">
      {/* Local Video Background Layer */}
      <div className="hero-video-container">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          poster="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80"
          className="hero-video-bg"
        >
          <source src="/videos/home-hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-video-overlay" />
      </div>

      <div className="container hero-content-wrapper">
        <div className="hero-badge">
          <Globe size={14} color="#00BF63" />
          <span>Visa • Tours • Corporate Travel</span>
        </div>

        <h1 className="hero-headline">
          Spin the <span className="text-green-highlight">globe</span>,<br />explore the world
        </h1>

        <p className="hero-subtext">
          See Places In New Ways
        </p>

        {/* Premium Intelligent Global Search Bar */}
        <HeroSearchBar onOpenInquiry={onOpenInquiry} />

        <div className="hero-cta-group">
          <button 
            type="button"
            className="btn-primary hero-main-btn"
            onClick={() => onOpenInquiry && onOpenInquiry({ category: 'package', title: 'Plan My Trip' })}
          >
            <span>Plan My Trip</span>
            <ArrowRight size={18} />
          </button>

          <button 
            type="button"
            className="btn-cream hero-secondary-btn"
            onClick={() => onOpenInquiry && onOpenInquiry({ category: 'visa', title: 'Visa Assistance' })}
          >
            <Shield size={18} color="#071228" />
            <span>Visa Assistance</span>
          </button>
        </div>

        {/* Floating Trust Indicators */}
        <div className="hero-trust-indicators">
          <div className="trust-item">
            <span className="trust-num">100%</span>
            <span className="trust-label">Dedicated Support</span>
          </div>
          <div className="trust-divider" />
          <div className="trust-item">
            <span className="trust-num">20+</span>
            <span className="trust-label">Visa Destinations</span>
          </div>
          <div className="trust-divider" />
          <div className="trust-item">
            <span className="trust-num">24×7</span>
            <span className="trust-label">Travel Guidance</span>
          </div>
          <div className="trust-divider" />
          <div className="trust-item">
            <span className="trust-num">1</span>
            <span className="trust-label">Dedicated Point of Contact</span>
          </div>
        </div>
      </div>
    </section>
  );
}
