import React from 'react';
import { UserCheck, Clock, ShieldCheck, CreditCard, HeartHandshake, Sparkles, Phone } from 'lucide-react';
import './WhyChooseSpinGlobal.css';

export default function WhyChooseSpinGlobal() {
  const whatsappLink = "https://wa.me/916284661722?text=Hello%20Spin%20Global!%20I'd%20like%20to%20plan%20my%20trip%20with%20your%20guidance.";

  const reasons = [
    {
      icon: <UserCheck size={24} color="#00BF63" />,
      title: 'One Contact, Zero Confusion',
      desc: 'One dedicated travel expert managing your itinerary, bookings, and visas from start to finish.'
    },
    {
      icon: <Clock size={24} color="#00BF63" />,
      title: '24x7 Support, Bcz Travel Doesn’t Clock Out',
      desc: 'Round-the-clock assistance available whenever you need help before or during your trip.'
    },
    {
      icon: <ShieldCheck size={24} color="#00BF63" />,
      title: 'Trips Built Around You',
      desc: 'Tailored itineraries designed specifically around your preferences, budget, and travel style.'
    },
    {
      icon: <CreditCard size={24} color="#00BF63" />,
      title: 'Easy Payments, Easy Planning',
      desc: 'Transparent pricing with flexible payment terms and zero hidden surprises.'
    },
    {
      icon: <img src="/images/spin-mascot.png" alt="Spin Mascot" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />,
      title: 'Friendly Guidance',
      desc: 'Simple, personal guidance whenever you need help planning your trip.'
    },
    {
      icon: <HeartHandshake size={24} color="#00BF63" />,
      title: 'Little Details That Matter',
      desc: 'From airport transfers to document checks, we take care of the small things that elevate your journey.'
    }
  ];

  return (
    <section className="why-choose-section">
      <div className="container">
        <div className="section-heading-center">
          <span className="section-badge">Why Travel With Us</span>
          <h2 className="main-section-title">Reasons We're Worth Packing Along</h2>
          <p className="section-subtitle">
            Thoughtful planning. Personal guidance. The little things that make every journey feel effortless.
          </p>
        </div>

        <div className="why-reasons-grid">
          {reasons.map((item, idx) => (
            <div key={idx} className="reason-card hover-lift">
              <div className="reason-icon-wrapper">{item.icon}</div>
              <h3 className="reason-title">{item.title}</h3>
              <p className="reason-desc">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Highlight Callout Box featuring Spin Mascot */}
        <div className="why-callout-box">
          <div className="callout-content">
            <img src="/images/spin-mascot.png" alt="Spin Mascot Guide" className="why-callout-mascot" />
            <div>
              <h3 className="callout-heading">Hey, what are you planning for?</h3>
              <p className="callout-sub">Let our travel experts craft the ideal trip for you.</p>
            </div>
          </div>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary callout-btn">
            <Phone size={18} />
            <span>Call Us / WhatsApp (+91 62846-61722)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
