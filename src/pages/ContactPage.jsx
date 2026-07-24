import React from 'react';
import ContactFooter from '../components/ContactFooter';

export default function ContactPage({ onToast }) {
  return (
    <div className="page-view contact-page-view">
      {/* Local Video Background Hero Banner */}
      <div className="page-hero-banner">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          poster="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=1600&q=80"
          className="page-hero-video-bg"
        >
          <source src="/videos/contact-hero.mp4" type="video/mp4" />
        </video>
        <div className="page-hero-overlay" />

        <div className="container page-hero-content">
          <span className="section-badge">We'd Love To Hear From You</span>
          <h1 className="page-hero-title">Contact Us</h1>
          <p className="page-hero-sub">
            Whether you're planning your next journey, need visa assistance, or would like to discuss a business partnership, let's connect!
          </p>
        </div>
      </div>

      <ContactFooter onToast={onToast} />
    </div>
  );
}
