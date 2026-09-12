import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import './PopularEscapes.css';

export default function PopularEscapes({ onSelectDestination, limit, showExploreMore = true }) {
  const escapes = [
    { slug: 'bali', title: 'Indonesia (Bali)', image: encodeURI('/images/Bali Ulun Danu Temple.jpg?v=5'), tag: 'Tanah Lot & Ubud', objectPosition: 'center center' },
    { slug: 'uae', title: 'UAE (Dubai)', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80', tag: 'Burj Khalifa & Safari' },
    { slug: 'vietnam', title: 'Vietnam', image: encodeURI('/images/Ba Na Hills Golden Bridge , Vietnam.jpg'), tag: 'Ba Na Hills & Golden Bridge' },
    { slug: 'thailand', title: 'Thailand', image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=600&q=80', tag: 'Phi Phi Islands' },
    { slug: 'singapore', title: 'Singapore', image: encodeURI('/images/Singapore Marina Bay Sands.jpg'), tag: 'Gardens by the Bay' },
    { slug: 'japan', title: 'Japan', image: encodeURI('/images/Fushimi Inari Shrine , Kyoto , Japan.jpg'), tag: 'Torii Gates & Bamboo Grove' },
    { slug: 'schengen', title: 'Schengen (Europe)', image: encodeURI('/images 2/Eiffel Tower , paris , france.jpg.jpeg'), tag: 'Eiffel Tower & Swiss Alps' },
    { slug: 'turkey', title: 'Turkey', image: encodeURI('/images/Cappadocia Hot Air Balloons , Turkey.jpg'), tag: 'Cappadocia Hot Air Balloons' }
  ];

  const displayedEscapes = limit ? escapes.slice(0, limit) : escapes;

  return (
    <section className="popular-escapes-section">
      <div className="container">
        <div className="section-heading-center">
          <span className="section-badge">International Gateways</span>
          <h2 className="main-section-title">Find Your Perfect Escape</h2>
          <p className="section-subtitle">
            From city lights to tropical islands, discover a journey worth crossing borders for.
          </p>
        </div>

        <div className="escapes-grid">
          {displayedEscapes.map((item, index) => (
            <div 
              key={index} 
              className="escape-card"
              onClick={() => onSelectDestination && onSelectDestination(item.slug)}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="escape-img" 
                style={item.objectPosition ? { objectPosition: item.objectPosition } : undefined}
                loading="lazy" 
                decoding="async" 
              />
              
              {/* Subtle top badge on full image */}
              <div className="escape-top-badge">
                <MapPin size={13} color="#00BF63" />
                <span>{item.title}</span>
              </div>

              {/* Full Hover Overlay */}
              <div className="escape-hover-overlay">
                <div className="hover-content">
                  <span className="hover-tag">{item.tag}</span>
                  <h3 className="hover-title">{item.title}</h3>
                  <div className="hover-cta">
                    <span>View Tourist Spots</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Explore More CTA Button */}
        {showExploreMore && (
          <div className="escapes-cta-row">
            <Link to="/international" className="btn-dark explore-more-btn">
              <span>Explore More International Trips</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
