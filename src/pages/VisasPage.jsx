import React from 'react';
import VisaServicesSection from '../components/VisaServicesSection';

export default function VisasPage({ onOpenInquiry }) {
  return (
    <div className="page-view visas-page-view">
      {/* Local Video Background Hero Banner */}
      <div className="page-hero-banner">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          poster="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1600&q=80"
          className="page-hero-video-bg"
        >
          <source src="/videos/visas-hero.mp4" type="video/mp4" />
        </video>
        <div className="page-hero-overlay" />

        <div className="container page-hero-content">
          <span className="section-badge">Hassle-Free Processing</span>
          <h1 className="page-hero-title">Visa Services & Assistance</h1>
          <p className="page-hero-sub">
            Collect stamps, not stress — Expert guidance for Tourist, Visitor & Business visas worldwide.
          </p>
        </div>
      </div>

      <VisaServicesSection onVisaClick={(item) => onOpenInquiry(item)} />
    </div>
  );
}
