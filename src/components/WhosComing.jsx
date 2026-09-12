import React from 'react';
import './WhosComing.css';

const TRAVEL_TYPES = [
  {
    id: 'family',
    label: 'Family',
    image: '/images/travel-family-cutout.png',
    alt: 'Family travel with luggage',
    description: 'Perfect family getaways',
  },
  {
    id: 'couple',
    label: 'Couple',
    image: '/images/travel-couple-cutout.png',
    alt: 'Couple travelling together',
    description: 'Romantic escapes for two',
  },
  {
    id: 'group',
    label: 'Group',
    image: '/images/travel-friends-cutout.png',
    alt: 'Group travelling together',
    description: 'Group adventures & trips',
  },
  {
    id: 'solo',
    label: 'Solo',
    image: '/images/travel-solo-cutout.png',
    alt: 'Solo female traveller',
    description: 'Solo explorer journeys',
  },
  {
    id: 'senior',
    label: 'Senior Citizen',
    image: '/images/travel-senior-cutout.png',
    alt: 'Senior citizen couple travelling',
    description: 'Relaxing senior getaways',
  },
];

export default function WhosComing({ onOpenInquiry }) {
  const handleCardClick = (type) => {
    if (onOpenInquiry) {
      onOpenInquiry({
        category: type.id,
        title: `${type.label} Travel Package`,
        description: type.description,
      });
    }
  };

  return (
    <section className="whos-coming-section" aria-label="Who's Coming Along">
      {/* Header */}
      <div className="whos-coming-header">
        <h2>
          Who's <span className="highlight">Coming</span> Along?
        </h2>
      </div>

      {/* 5-Card Full Row Grid (All 5 travel options together) */}
      <div className="whos-coming-grid">
        {TRAVEL_TYPES.map((type) => (
          <div
            key={type.id}
            className="whos-coming-card"
            onClick={() => handleCardClick(type)}
            role="button"
            tabIndex={0}
            aria-label={`${type.label} travel packages`}
            onKeyDown={(e) => e.key === 'Enter' && handleCardClick(type)}
          >
            <div className="whos-coming-img-wrap">
              <img
                src={type.image}
                alt={type.alt}
                className="whos-coming-img"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="whos-coming-label">
              <span>{type.label}</span>
              <span className="arrow-icon">›</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
