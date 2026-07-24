import React from 'react';
import { Plane, ShieldCheck, Sparkles } from 'lucide-react';
import './BannerIntro.css';

export default function BannerIntro() {
  return (
    <section className="banner-intro-section">
      <div className="container">
        <div className="banner-intro-box">
          <div className="banner-intro-icon">
            <Sparkles size={28} color="#00BF63" />
          </div>

          <h2 className="banner-intro-title">
            From Travel Dreams to Visa Approvals, <br />
            We've Got Every Step Covered.
          </h2>

          <p className="banner-intro-sub">
            Because every great journey begins with a stress-free start.
          </p>
        </div>
      </div>
    </section>
  );
}
