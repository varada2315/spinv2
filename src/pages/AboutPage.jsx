import React from 'react';
import AboutSection from '../components/AboutSection';
import { Heart, Award, Users } from 'lucide-react';
import './Pages.css';

export default function AboutPage() {
  return (
    <div className="page-view about-page-view">
      {/* Local Video Background Hero Banner */}
      <div className="page-hero-banner">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          poster="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80"
          className="page-hero-video-bg"
        >
          <source src="/videos/about-hero.mp4" type="video/mp4" />
        </video>
        <div className="page-hero-overlay" />

        <div className="container page-hero-content">
          <span className="section-badge">Who We Are</span>
          <h1 className="page-hero-title">About Spin Global</h1>
          <p className="page-hero-sub">
            Simplifying travel with personalised holidays, expert visa assistance, and tailored corporate travel solutions.
          </p>
        </div>
      </div>

      <AboutSection />

      {/* Extra Brand Core Values */}
      <section className="about-values-section container">
        <div className="section-heading-center">
          <span className="section-badge">Our Core Philosophy</span>
          <h2 className="main-section-title">Built On Trust, Clarity & Care</h2>
        </div>

        <div className="values-grid">
          <div className="value-card">
            <div className="val-icon-box"><Heart size={24} color="#00BF63" /></div>
            <h3>Customer First Approach</h3>
            <p>Every itinerary and visa application is treated with the care and attention it deserves.</p>
          </div>

          <div className="value-card">
            <div className="val-icon-box"><Award size={24} color="#00BF63" /></div>
            <h3>Expert Guidance</h3>
            <p>Decades of collective travel experience ensuring your paperwork and bookings are flawless.</p>
          </div>

          <div className="value-card">
            <div className="val-icon-box"><Users size={24} color="#00BF63" /></div>
            <h3>End-To-End Support</h3>
            <p>From your initial phone inquiry to your safe arrival back home, we are by your side.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
