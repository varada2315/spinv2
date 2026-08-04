import React from 'react';
import AboutSection from '../components/AboutSection';
import { Heart, Award, Users, Info, ArrowRight } from 'lucide-react';
import '../components/HeroSection.css';
import './Pages.css';

export default function AboutPage({ onOpenInquiry }) {
  return (
    <div className="page-view about-page-view">
      {/* Full-Screen Home-Style Hero Section for About Page */}
      <section className="hero-section about-hero-section">
        {/* Background Video Layer */}
        <div className="hero-video-container">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            webkit-playsinline="true"
            poster="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80"
            className="hero-video-bg"
          >
            <source src="/videos/about-hero.mp4" type="video/mp4" />
            <source src={encodeURI("/images/about us page video.mp4")} type="video/mp4" />
          </video>
          <div className="hero-video-overlay" />
        </div>

        <div className="container hero-content-wrapper">
          <div className="hero-badge">
            <Info size={14} color="#00BF63" />
            <span>WHO WE ARE</span>
          </div>

          <h1 className="hero-headline">
            About <span className="text-green-highlight">Spin Global</span>
          </h1>

          <p className="hero-subtext">
            Simplifying travel with personalised holidays, expert visa assistance, and tailored corporate travel solutions.
          </p>

          <div className="hero-cta-group">
            <button 
              className="btn-primary hero-main-btn"
              onClick={() => onOpenInquiry && onOpenInquiry({ category: 'package', title: 'Plan My Trip' })}
            >
              <span>Get In Touch</span>
              <ArrowRight size={18} />
            </button>
          </div>

          {/* About Trust Indicators Bar */}
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
              <span className="trust-num">24x7</span>
              <span className="trust-label">Travel Guidance</span>
            </div>
          </div>
        </div>
      </section>

      <AboutSection />

      {/* Extra Brand Core Values */}
      <section className="about-values-section container">
        <div className="section-heading-center">
          <span className="section-badge">Our Core Philosophy</span>
          <h2 className="main-section-title">Built On Trust, Clarity & Care</h2>
        </div>

        <div className="values-grid">
          <div className="value-card">
            <div className="val-icon-box"><Heart size={26} /></div>
            <h3>Customer First Approach</h3>
            <p>Every itinerary and visa application is treated with the care and attention it deserves.</p>
          </div>

          <div className="value-card">
            <div className="val-icon-box"><Award size={26} /></div>
            <h3>Expert Guidance</h3>
            <p>Decades of collective travel experience ensuring your paperwork and bookings are flawless.</p>
          </div>

          <div className="value-card">
            <div className="val-icon-box"><Users size={26} /></div>
            <h3>End-To-End Support</h3>
            <p>From your initial phone inquiry to your safe arrival back home, we are by your side.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
