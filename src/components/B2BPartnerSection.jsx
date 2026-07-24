import React from 'react';
import { ShieldCheck, FileCheck, Cpu, HeartHandshake, ArrowRight, CheckCircle2 } from 'lucide-react';
import './B2BPartnerSection.css';

export default function B2BPartnerSection({ onPartnerClick }) {
  const categories = [
    { title: 'Tourist Visas', desc: 'Reliable visa assistance for leisure travellers.' },
    { title: 'Business Visas', desc: 'Professional support for corporate travel.' },
    { title: 'Visitor Visas', desc: 'Helping families and individuals travel with confidence.' }
  ];

  const advantages = [
    'Dedicated Partner Support',
    'Documentation Guidance',
    'Clear Communication',
    'Reliable Processing',
    'Your Clients Stay Yours',
    'Long Term Partnership'
  ];

  const steps = [
    { step: '01', title: 'Share Your Requirement', desc: 'Send us applicant details and destination needs.' },
    { step: '02', title: 'We Review Documents', desc: 'Thorough checklist check to ensure complete compliance.' },
    { step: '03', title: 'We Process Application', desc: 'End-to-end filing with embassy & tracking updates.' },
    { step: '04', title: 'You Deliver Experience', desc: 'Hand over approved visa to your delighted client.' }
  ];

  return (
    <section className="b2b-section" id="b2b">
      <div className="container">
        <div className="b2b-header-box">
          <span className="section-badge">For Travel Professionals</span>
          <h2 className="main-section-title">
            Your Trusted B2B <span className="text-green">Visa Partner</span>
          </h2>
          <p className="b2b-intro-text">
            Whether you're an independent travel consultant or an established travel agency, we're here to help you deliver reliable tourist, business, and visitor visa services without adding complexity to your workflow. From documentation guidance to application support, we work behind the scenes so you can focus on your clients while we take care of the process.
          </p>
        </div>

        {/* Visa Categories Cards */}
        <div className="b2b-categories-grid">
          {categories.map((cat, idx) => (
            <div key={idx} className="b2b-cat-card">
              <div className="cat-icon-circle">
                <FileCheck size={24} color="#00BF63" />
              </div>
              <h3 className="cat-title">{cat.title}</h3>
              <p className="cat-desc">{cat.desc}</p>
            </div>
          ))}
        </div>

        {/* Why Agencies Partner with Us */}
        <div className="b2b-advantages-box">
          <h3 className="adv-heading">Why Travel Agencies Partner with Us</h3>
          <div className="adv-grid">
            {advantages.map((adv, idx) => (
              <div key={idx} className="adv-item">
                <CheckCircle2 size={18} color="#00BF63" />
                <span>{adv}</span>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works 4-Step Process */}
        <div className="b2b-process-section">
          <h3 className="process-heading">How It Works</h3>
          <div className="steps-grid">
            {steps.map((s, idx) => (
              <div key={idx} className="step-card">
                <span className="step-num">{s.step}</span>
                <h4 className="step-title">{s.title}</h4>
                <p className="step-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="b2b-cta-bar">
          <button className="btn-primary b2b-btn" onClick={() => onPartnerClick('B2B Visa Partnership')}>
            <span>Partner with Spin Global</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
