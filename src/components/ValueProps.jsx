import React from 'react';
import { Tag, Headphones, ShieldCheck, Award } from 'lucide-react';
import './ValueProps.css';

export default function ValueProps() {
  const props = [
    {
      icon: <Tag size={24} color="#0055FE" />,
      title: 'Best Price Guarantee',
      desc: 'We ensure you get the best deals always.',
      bgColor: '#EBF3FF',
    },
    {
      icon: <Headphones size={24} color="#00B54B" />,
      title: '24/7 Customer Support',
      desc: "We're here to help you anytime, anywhere.",
      bgColor: '#E6F8ED',
    },
    {
      icon: <ShieldCheck size={24} color="#0055FE" />,
      title: 'Secure Bookings',
      desc: 'Your data and payments are 100% safe with us.',
      bgColor: '#EBF3FF',
    },
    {
      icon: <Award size={24} color="#FFAB00" />,
      title: 'Handpicked Experiences',
      desc: 'Curated tours and hotels for unforgettable trips.',
      bgColor: '#FFF8E6',
    },
  ];

  return (
    <section className="value-props-section">
      <div className="container">
        <div className="value-props-grid">
          {props.map((item, idx) => (
            <div key={idx} className="prop-card hover-lift">
              <div className="prop-icon-circle" style={{ backgroundColor: item.bgColor }}>
                {item.icon}
              </div>
              <div className="prop-text">
                <h3 className="prop-title">{item.title}</h3>
                <p className="prop-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
