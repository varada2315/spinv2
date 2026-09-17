import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import './IndiaHolidays.css';

export default function IndiaHolidays({ onSelectIndiaRegion, limit, showExploreMore = true }) {
  const indiaRegions = [
    { slug: 'kashmir', title: 'Kashmir', image: '/images/dom/kashmir.jpg', desc: 'Dal Lake Shikara & Gulmarg Gondola' },
    { slug: 'leh-ladakh', title: 'Leh Ladakh', image: '/images/dom/leh-ladakh.jpg', desc: 'Pangong Lake & Nubra Sand Dunes' },
    { slug: 'rajasthan', title: 'Rajasthan', image: '/images/dom/rajasthan.jpg', desc: 'Amber Fort & Lake Pichola Palaces' },
    { slug: 'kerala', title: 'Kerala', image: '/images/dom/kerala.jpg', desc: 'Alleppey Houseboats & Munnar Tea' },
    { slug: 'goa', title: 'Goa', image: '/images/dom/goa.jpg', desc: 'Baga Beaches & Dudhsagar Waterfalls' },
    { slug: 'andaman', title: 'Andaman & Nicobar', image: '/images/dom/andaman.jpg', desc: 'Radhanagar Beach & Cellular Jail' },
    { slug: 'meghalaya', title: 'Meghalaya', image: '/images/dom/meghalaya.jpg', desc: 'Living Root Bridges & Dawki River' },
    { slug: 'sikkim', title: 'Sikkim', image: '/images/dom/sikkim.jpg', desc: 'Tsomgo Lake & Kanchenjunga Views' }
  ];

  const displayedRegions = limit ? indiaRegions.slice(0, limit) : indiaRegions;

  return (
    <section className="india-holidays-section" id="domestic">
      <div className="container">
        <div className="section-heading-center">
          <span className="section-badge">Domestic Getaways</span>
          <h2 className="main-section-title">
            Incredible Bharat
          </h2>
          <p className="section-subtitle">
            Beyond every mountain, every coastline, and every culture lies the side of Bharat you've yet to discover.
          </p>
        </div>

        <div className="india-grid">
          {displayedRegions.map((item, idx) => (
            <div
              key={idx}
              className="india-card"
              onClick={() => onSelectIndiaRegion && onSelectIndiaRegion(item.slug)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="india-img"
                loading="eager"
                decoding="async"
              />

              {/* Subtle top badge on full image */}
              <div className="india-top-badge">
                <MapPin size={13} color="#00BF63" />
                <span>{item.title}</span>
              </div>

              {/* Full Hover Overlay */}
              <div className="india-hover-overlay">
                <div className="india-hover-content">
                  <span className="india-hover-tag">{item.desc}</span>
                  <h3 className="india-hover-title">{item.title}</h3>
                  <div className="india-hover-cta">
                    <span>View Tourist Spots</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {showExploreMore && (
          <div className="escapes-cta-row" style={{ marginTop: '40px' }}>
            <Link to="/domestic" className="btn-dark explore-more-btn">
              <span>Explore More Domestic Trips</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
