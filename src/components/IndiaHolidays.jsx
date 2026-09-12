import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './IndiaHolidays.css';

export default function IndiaHolidays({ onSelectIndiaRegion, limit, showExploreMore = true }) {
  const indiaRegions = [
    { slug: 'kashmir', title: 'Kashmir', image: encodeURI('/images/Kashmir.jpg.jpeg'), desc: 'Dal Lake Shikara & Gulmarg Gondola' },
    { slug: 'leh-ladakh', title: 'Leh Ladakh', image: encodeURI('/images/leh ladakh.jpg.jpeg'), desc: 'Pangong Lake & Nubra Sand Dunes' },
    { slug: 'rajasthan', title: 'Rajasthan', image: encodeURI('/images/Rajasthan.jpg.jpeg'), desc: 'Amber Fort & Lake Pichola Palaces' },
    { slug: 'kerala', title: 'Kerala', image: encodeURI('/images/kerala.jpg.jpeg'), desc: 'Alleppey Houseboats & Munnar Tea' },
    { slug: 'goa', title: 'Goa', image: encodeURI('/images/goaa.avif'), desc: 'Baga Beaches & Dudhsagar Waterfalls' },
    { slug: 'andaman', title: 'Andaman & Nicobar', image: encodeURI('/images/Andaman.jpg.jpeg'), desc: 'Radhanagar Beach & Cellular Jail' },
    { slug: 'meghalaya', title: 'Meghalaya', image: encodeURI('/images/meghalaya.jpg.jpeg'), desc: 'Living Root Bridges & Dawki River' },
    { slug: 'sikkim', title: 'Sikkim', image: encodeURI('/images/sikkim.jpg.jpeg'), desc: 'Tsomgo Lake & Kanchenjunga Views' }
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
              className="india-card hover-lift"
              onClick={() => onSelectIndiaRegion && onSelectIndiaRegion(item.slug)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="india-img"
                loading="lazy"
                decoding="async"
              />
              <div className="india-overlay">
                <h3 className="india-title">{item.title}</h3>
                <p className="india-desc">{item.desc}</p>
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
