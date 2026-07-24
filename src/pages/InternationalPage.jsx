import React from 'react';
import InternationalHolidays from '../components/InternationalHolidays';
import PopularEscapes from '../components/PopularEscapes';

export default function InternationalPage({ onOpenDestination, onOpenInquiry }) {
  return (
    <div className="page-view international-page-view">
      {/* Local Video Background Hero Banner */}
      <div className="page-hero-banner">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          poster="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80"
          className="page-hero-video-bg"
        >
          <source src="/videos/international-hero.mp4" type="video/mp4" />
        </video>
        <div className="page-hero-overlay" />

        <div className="container page-hero-content">
          <span className="section-badge">Worldwide Escapes</span>
          <h1 className="page-hero-title">International Holidays (22 Destinations)</h1>
          <p className="page-hero-sub">
            Click on any destination to view famous spots slideshow & send a direct WhatsApp enquiry.
          </p>
        </div>
      </div>

      <InternationalHolidays onSelectDestination={(slug) => onOpenDestination(slug)} />
      <PopularEscapes showExploreMore={false} onSelectDestination={(slug) => onOpenDestination(slug)} />
    </div>
  );
}
