import React from 'react';
import IndiaHolidays from '../components/IndiaHolidays';

export default function DomesticPage({ onOpenDestination, onOpenInquiry }) {
  return (
    <div className="page-view domestic-page-view">
      {/* Local Video Background Hero Banner */}
      <div className="page-hero-banner">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          poster="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1600&q=80"
          className="page-hero-video-bg"
        >
          <source src="/videos/domestic-hero.mp4" type="video/mp4" />
        </video>
        <div className="page-hero-overlay" />

        <div className="container page-hero-content">
          <span className="section-badge">Explore India</span>
          <h1 className="page-hero-title">Domestic Holidays – Incredible Bharat (8 Regions)</h1>
          <p className="page-hero-sub">
            Click on any region to view famous spots slideshow & send a direct WhatsApp enquiry.
          </p>
        </div>
      </div>

      <IndiaHolidays showExploreMore={false} onSelectIndiaRegion={(slug) => onOpenDestination(slug)} />
    </div>
  );
}
