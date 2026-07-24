import React from 'react';
import B2BPartnerSection from '../components/B2BPartnerSection';

export default function B2BPage({ onOpenInquiry }) {
  return (
    <div className="page-view b2b-page-view">
      {/* Local Video Background Hero Banner */}
      <div className="page-hero-banner">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          poster="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
          className="page-hero-video-bg"
        >
          <source src="/videos/b2b-hero.mp4" type="video/mp4" />
        </video>
        <div className="page-hero-overlay" />

        <div className="container page-hero-content">
          <span className="section-badge">Travel Agency Portal</span>
          <h1 className="page-hero-title">B2B Visa Partnership</h1>
          <p className="page-hero-sub">
            Built to support your business — Reliable visa assistance for independent consultants and established travel agencies.
          </p>
        </div>
      </div>

      <B2BPartnerSection onPartnerClick={(item) => onOpenInquiry(item)} />
    </div>
  );
}
