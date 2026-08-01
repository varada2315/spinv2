import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube, Share2, Pin } from 'lucide-react';
import './SocialConnect.css';

const SOCIAL_LINKS = [
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://www.instagram.com/spinglobal_?igsh=MTFqczFqNDFnODRldA==',
    color: '#E4405F',
    handle: '@spinglobal_',
    sub: 'Daily Travel Reels & Highlights'
  },
  {
    name: 'Facebook',
    icon: Facebook,
    url: 'https://www.facebook.com/share/1DQqQMsfwJ/?mibextid=wwXIfr',
    color: '#1877F2',
    handle: 'Spin Global Travel',
    sub: 'Customer Stories & Community'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/company/spinglobalindia/',
    color: '#0A66C2',
    handle: 'Spin Global Corporate',
    sub: 'B2B Updates & Global News'
  },
  {
    name: 'Pinterest',
    icon: Pin,
    url: 'https://pin.it/2C66ahDdE',
    color: '#E60023',
    handle: 'Spin Destination Boards',
    sub: 'Itinerary Pins & Travel Inspo'
  },
  {
    name: 'YouTube',
    icon: Youtube,
    url: 'https://youtube.com/@spinglobal-ind?si=FalPEFhXIH3-RzqJ',
    color: '#FF0000',
    handle: '@spinglobal-ind',
    sub: 'Resort Walkthroughs & Guides'
  }
];

export default function SocialConnect() {
  return (
    <section className="social-connect-section">
      <div className="container">
        <div className="social-header-center">
          <span className="section-badge">STAY CONNECTED</span>
          <h2 className="main-section-title">Find Us On Social Media</h2>
          <p className="section-subtitle">
            Follow Spin Global across social platforms for real-time travel inspiration, exclusive flight offers, and behind-the-scenes vlogs.
          </p>
        </div>

        <div className="social-cards-grid">
          {SOCIAL_LINKS.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-card-item"
                style={{ '--social-brand-color': item.color }}
              >
                <div className="social-icon-box">
                  <IconComponent size={24} />
                </div>
                <div className="social-card-text">
                  <h4 className="social-name">{item.name}</h4>
                  <span className="social-handle">{item.handle}</span>
                  <p className="social-sub">{item.sub}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
