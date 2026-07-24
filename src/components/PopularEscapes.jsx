import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import './PopularEscapes.css';

export default function PopularEscapes({ onSelectDestination, limit, showExploreMore = true }) {
  const escapes = [
    { slug: 'bali', title: 'Indonesia (Bali)', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80', tag: 'Tanah Lot & Ubud' },
    { slug: 'uae', title: 'UAE (Dubai)', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80', tag: 'Burj Khalifa & Safari' },
    { slug: 'vietnam', title: 'Vietnam', image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=600&q=80', tag: 'Ha Long Bay Cruise' },
    { slug: 'thailand', title: 'Thailand', image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=600&q=80', tag: 'Phi Phi Islands' },
    { slug: 'singapore', title: 'Singapore', image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=600&q=80', tag: 'Gardens by the Bay' },
    { slug: 'japan', title: 'Japan', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80', tag: 'Mount Fuji & Kyoto' },
    { slug: 'schengen', title: 'Schengen (Europe)', image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=600&q=80', tag: 'Eiffel Tower & Swiss Alps' },
    { slug: 'turkey', title: 'Turkey', image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=600&q=80', tag: 'Cappadocia Balloons' }
  ];

  const displayedEscapes = limit ? escapes.slice(0, limit) : escapes;

  return (
    <section className="popular-escapes-section">
      <div className="container">
        <div className="section-heading-center">
          <span className="section-badge">Popular Getaways</span>
          <h2 className="main-section-title">Find Your Perfect Escape</h2>
          <p className="section-subtitle">
            Hover over any country to explore famous tourist spots & instant WhatsApp inquiry.
          </p>
        </div>

        <div className="escapes-grid">
          {displayedEscapes.map((item, index) => (
            <div 
              key={index} 
              className="escape-card"
              onClick={() => onSelectDestination && onSelectDestination(item.slug)}
            >
              <img src={item.image} alt={item.title} className="escape-img" />
              
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
