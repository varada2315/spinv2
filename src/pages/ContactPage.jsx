import React from 'react';
import ContactSection from '../components/ContactSection';
import { Mail, ArrowRight } from 'lucide-react';
import '../components/HeroSection.css';
import './Pages.css';

export default function ContactPage({ onOpenInquiry, onToast }) {
  return (
    <div className="page-view contact-page-view">
      {/* Full-Screen Home-Style Hero Section for Contact Page */}
      <section className="hero-section contact-hero-section">
        {/* Background Video Layer */}
        <div className="hero-video-container">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            webkit-playsinline="true"
            poster="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1600&q=80"
            className="hero-video-bg"
          >
            <source src="/videos/contact-hero.mp4" type="video/mp4" />
          </video>
          <div className="hero-video-overlay" />
        </div>

        <div className="container hero-content-wrapper">
          <div className="hero-badge">
            <Mail size={14} color="#00BF63" />
            <span>WE'D LOVE TO HEAR FROM YOU</span>
          </div>

          <h1 className="hero-headline">
            Contact <span className="text-green-highlight">Us</span>
          </h1>

          <p className="hero-subtext">
            Whether you're planning your next journey, need visa assistance, or would like to discuss a business partnership, let's connect!
          </p>

          <div className="hero-cta-group">
            <button 
              className="btn-primary hero-main-btn"
              onClick={() => onOpenInquiry && onOpenInquiry({ category: 'custom', title: 'General Contact Inquiry' })}
            >
              <span>Send An Inquiry</span>
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Contact Page Trust Indicators Bar */}
          <div className="hero-trust-indicators">
            <div className="trust-item">
              <span className="trust-num">24/7</span>
              <span className="trust-label">Customer Support</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-item">
              <span className="trust-num">100%</span>
              <span className="trust-label">Response Rate</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-item">
              <span className="trust-num">Instant</span>
              <span className="trust-label">WhatsApp Guidance</span>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Contact Cards & WhatsApp Message Form */}
      <ContactSection onToast={onToast} />
    </div>
  );
}
