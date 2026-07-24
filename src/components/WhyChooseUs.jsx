import React from 'react';
import { Globe, ThumbsUp, CalendarCheck, Percent, ArrowRight } from 'lucide-react';
import './WhyChooseUs.css';

export default function WhyChooseUs({ onPlanTrip }) {
  const benefits = [
    {
      icon: <Globe size={22} color="#0055FE" />,
      title: 'Wide Range of Choices',
      desc: 'Choose from thousands of flights, hotels and tours worldwide.'
    },
    {
      icon: <ThumbsUp size={22} color="#00B54B" />,
      title: 'Trusted by Travelers',
      desc: 'Join millions of happy travelers around the world.'
    },
    {
      icon: <CalendarCheck size={22} color="#0055FE" />,
      title: 'Flexible & Easy Booking',
      desc: 'Book with ease and adjust your plans if needed.'
    },
    {
      icon: <Percent size={22} color="#FFAB00" />,
      title: 'Exclusive Deals',
      desc: 'Get access to exclusive discounts and special offers.'
    }
  ];

  return (
    <section className="why-us-section" id="why-us">
      <div className="container">
        {/* Section Header */}
        <div className="why-header">
          <h2 className="section-title">
            Why Choose <span className="script-font why-script">Spin Global?</span>
          </h2>
        </div>

        <div className="why-us-content-grid">
          {/* Left Grid - 4 Key Advantages */}
          <div className="benefits-grid">
            {benefits.map((item, index) => (
              <div key={index} className="benefit-card hover-lift">
                <div className="benefit-icon-bg">
                  {item.icon}
                </div>
                <div className="benefit-info">
                  <h3 className="benefit-title">{item.title}</h3>
                  <p className="benefit-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Featured Promo Image Card */}
          <div className="promo-banner-card">
            <img 
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80" 
              alt="Beach Adventure - Spin Global Travel" 
              className="promo-bg-img"
            />
            <div className="promo-overlay">
              <span className="promo-tag">LET'S GO!</span>
              <h3 className="promo-heading">Your Next Adventure Awaits!</h3>
              <p className="promo-sub">
                Discover breathtaking places and create unforgettable memories with Spin Global.
              </p>
              <button className="promo-btn" onClick={onPlanTrip}>
                <span>Plan Your Trip</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
