import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './IndiaHolidays.css';

export default function IndiaHolidays({ onSelectIndiaRegion, limit, showExploreMore = true }) {
  const indiaRegions = [
    { slug: 'kashmir', title: 'Kashmir', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=600&q=80', desc: 'Dal Lake Shikara & Gulmarg Gondola' },
    { slug: 'leh-ladakh', title: 'Leh Ladakh', image: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=600&q=80', desc: 'Pangong Lake & Nubra Sand Dunes' },
    { slug: 'rajasthan', title: 'Rajasthan', image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=600&q=80', desc: 'Amber Fort & Lake Pichola Palaces' },
    { slug: 'kerala', title: 'Kerala', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=600&q=80', desc: 'Alleppey Houseboats & Munnar Tea' },
    { slug: 'goa', title: 'Goa', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=600&q=80', desc: 'Baga Beaches & Dudhsagar Waterfalls' },
    { slug: 'andaman', title: 'Andaman & Nicobar', image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=600&q=80', desc: 'Radhanagar Beach & Cellular Jail' },
    { slug: 'meghalaya', title: 'Meghalaya', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80', desc: 'Living Root Bridges & Dawki River' },
    { slug: 'sikkim', title: 'Sikkim', image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=600&q=80', desc: 'Tsomgo Lake & Kanchenjunga Views' }
  ];

  const displayedRegions = limit ? indiaRegions.slice(0, limit) : indiaRegions;

  return (
    <section className="india-holidays-section" id="domestic">
      <div className="container">
        <div className="section-heading-center">
          <span className="section-badge">Domestic Tourism</span>
          <h2 className="main-section-title">
            Domestic – Explore Bharat
          </h2>
          <p className="section-subtitle">
            Beyond every mountain, every coastline, and every culture lies a side of Bharat you've yet to discover.
          </p>
        </div>

        <div className="india-grid">
          {displayedRegions.map((item, idx) => (
            <div 
              key={idx} 
              className="india-card hover-lift" 
              onClick={() => onSelectIndiaRegion && onSelectIndiaRegion(item.slug)}
            >
              <img src={item.image} alt={item.title} className="india-img" />
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
