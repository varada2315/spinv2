import React from 'react';
import { ShieldCheck, CheckCircle2, ArrowRight, Stamp } from 'lucide-react';
import './VisaServicesSection.css';

export default function VisaServicesSection({ onVisaClick }) {
  const visaCountries = [
    { country: 'USA', flagCode: 'us', type: 'B1/B2 Tourist & Business' },
    { country: 'Canada', flagCode: 'ca', type: 'Visitor & Express Visa' },
    { country: 'UK', flagCode: 'gb', type: 'Standard Visitor Visa' },
    { country: 'Schengen', flagCode: 'eu', type: '29 European Nations' },
    { country: 'Australia', flagCode: 'au', type: 'Subclass 600 Visitor' },
    { country: 'New Zealand', flagCode: 'nz', type: 'NZeTA & Visitor Visa' },
    { country: 'Japan', flagCode: 'jp', type: 'Short-Term Tourist Visa' },
    { country: 'South Korea', flagCode: 'kr', type: 'C-3-9 Tourist Visa' },
    { country: 'China', flagCode: 'cn', type: 'L Tourist & M Business' },
    { country: 'Hong Kong', flagCode: 'hk', type: 'PAR & Visitor Permit' },
    { country: 'Russia', flagCode: 'ru', type: 'E-Visa ' },
    { country: 'Thailand', flagCode: 'th', type: 'Tourist Visa & e-VOA' },
    { country: 'Philippines', flagCode: 'ph', type: '9A Visitor Visa' },
    { country: 'Vietnam', flagCode: 'vn', type: '30/90 Days E-Visa' },
    { country: 'Azerbaijan', flagCode: 'az', type: 'ASAN Official E-Visa' },
    { country: 'Saudi Arabia', flagCode: 'sa', type: ' EVisa' },
    { country: 'Turkey', flagCode: 'tr', type: 'E-Visa Assistance' },
    { country: 'South Africa', flagCode: 'za', type: 'Visitor Visa (Section 11)' },
    { country: 'UAE', flagCode: 'ae', type: '30 & 60 Days Tourist' },
    { country: 'Indonesia', flagCode: 'id', type: 'e-VOA & B211A Visa' }
  ];

  return (
    <section className="visa-services-section" id="visas">
      <div className="container">
        <div className="section-heading-center">
          <span className="section-badge">Hassle-Free Approvals</span>
          <h2 className="main-section-title">Collect Stamps, Not Stress</h2>
          <p className="section-subtitle">
            Tourist • Visitor • Business Visas Worldwide
          </p>
        </div>

        <div className="visa-countries-grid">
          {visaCountries.map((item, idx) => (
            <div 
              key={idx} 
              className="visa-stamp-card hover-lift"
              onClick={() => onVisaClick && onVisaClick({ category: 'visa', country: item.country, type: item.type, title: item.country })}
            >
              {/* Authentic Passport Visa Stamp Icon */}
              <div className="passport-visa-stamp">
                <div className="stamp-inner-border">
                  <img 
                    src={`https://flagcdn.com/w80/${item.flagCode}.png`} 
                    alt={`${item.country} Flag Stamp`} 
                    className="stamp-flag-img"
                  />
                  <span className="stamp-approved-text">APPROVED</span>
                </div>
                <div className="stamp-ridge-ring" />
              </div>

              <div className="visa-card-info">
                <h3 className="country-name">{item.country}</h3>
                <span className="visa-type">{item.type}</span>
              </div>

              <div className="visa-check-icon">
                <CheckCircle2 size={18} color="#00BF63" />
              </div>
            </div>
          ))}
        </div>

        <div className="visa-cta-bar">
          <button className="btn-primary visa-app-btn" onClick={() => onVisaClick({ country: 'General Visa Application' })}>
            <span>Start My Visa Application</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
