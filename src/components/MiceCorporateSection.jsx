import React from 'react';
import { Briefcase, Users, Calendar, Award, Building2, CheckCircle2, ArrowRight } from 'lucide-react';
import './MiceCorporateSection.css';

export default function MiceCorporateSection({ onCorporateClick }) {
  const offerings = [
    { icon: <Briefcase size={22} color="#00BF63" />, title: 'Meetings', desc: 'Executive board meets & strategic summits' },
    { icon: <Award size={22} color="#00BF63" />, title: 'Incentive Programs', desc: 'Rewarding top performers with luxury travel' },
    { icon: <Users size={22} color="#00BF63" />, title: 'Conferences', desc: 'Large scale corporate conventions & seminars' },
    { icon: <Building2 size={22} color="#00BF63" />, title: 'Events & Exhibitions', desc: 'Product launches, expos & trade shows' },
    { icon: <Calendar size={22} color="#00BF63" />, title: 'Business Travel', desc: 'End-to-end flights, hotel & ground transit' },
    { icon: <CheckCircle2 size={22} color="#00BF63" />, title: 'Business Visas', desc: 'Fast-track visa processing for corporate teams' }
  ];

  const features = [
    'One Dedicated Partner',
    'Fast & Responsive',
    'Tailored Solutions',
    'End-to-End Coordination',
    'Reliable Support',
    'Detail-Driven Planning'
  ];

  return (
    <section className="mice-section" id="corporate">
      <div className="container">
        <div className="section-heading-center">
          <span className="section-badge">Corporate Travel Solutions</span>
          <h2 className="main-section-title">
            MICE, <span className="text-green">Simplified.</span>
          </h2>
          <p className="section-subtitle">
            Everything MICE, under one Roof — Business travel, business visas and corporate events planned, coordinated and managed by one dedicated team.
          </p>
        </div>

        {/* Offerings Grid */}
        <div className="mice-offerings-grid">
          {offerings.map((item, idx) => (
            <div key={idx} className="mice-card hover-lift">
              <div className="mice-icon-box">{item.icon}</div>
              <h3 className="mice-title">{item.title}</h3>
              <p className="mice-desc">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Why It Works Banner */}
        <div className="why-mice-card">
          <h3 className="why-mice-title">Why It Works</h3>
          <div className="why-mice-grid">
            {features.map((feat, idx) => (
              <div key={idx} className="mice-feat-item">
                <CheckCircle2 size={18} color="#00BF63" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
          <div className="mice-cta-wrap">
            <button className="btn-cream" onClick={() => onCorporateClick('Corporate & MICE Query')}>
              <span>Plan Corporate Event</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
