import React from 'react';
import { ArrowRight } from 'lucide-react';
import './InternationalHolidays.css';

export default function InternationalHolidays({ onSelectDestination }) {
  const holidays = [
    { slug: 'bali', title: 'Indonesia (Bali)', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80', tag: 'Tanah Lot & Ubud Terraces' },
    { slug: 'uae', title: 'UAE (Dubai)', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80', tag: 'Burj Khalifa & Desert Safari' },
    { slug: 'vietnam', title: 'Vietnam', image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=600&q=80', tag: 'Ha Long Bay & Golden Bridge' },
    { slug: 'thailand', title: 'Thailand', image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=600&q=80', tag: 'Phi Phi Islands & Temples' },
    { slug: 'singapore', title: 'Singapore', image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=600&q=80', tag: 'Gardens by the Bay & Sentosa' },
    { slug: 'malaysia', title: 'Malaysia', image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=600&q=80', tag: 'Petronas Towers & Batu Caves' },
    { slug: 'japan', title: 'Japan', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80', tag: 'Mount Fuji & Kyoto Shrines' },
    { slug: 'schengen', title: 'Schengen (Europe)', image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=600&q=80', tag: 'Eiffel Tower & Swiss Alps' },
    { slug: 'sri-lanka', title: 'Sri Lanka', image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=600&q=80', tag: 'Sigiriya Rock & Nine Arch' },
    { slug: 'philippines', title: 'Philippines', image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=600&q=80', tag: 'El Nido Lagoons & Boracay' },
    { slug: 'georgia', title: 'Georgia', image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=600&q=80', tag: 'Caucasus & Gergeti Trinity' },
    { slug: 'kazakhstan', title: 'Kazakhstan (Almaty)', image: 'https://images.unsplash.com/photo-1558588942-930faae5a389?auto=format&fit=crop&w=600&q=80', tag: 'Charyn Canyon & Ski Slopes' },
    { slug: 'maldives', title: 'Maldives', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=600&q=80', tag: 'Overwater Bungalows' },
    { slug: 'saudi-arabia', title: 'Saudi Arabia', image: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&w=600&q=80', tag: 'AlUla Tombs & Mecca' },
    { slug: 'turkey', title: 'Turkey', image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=600&q=80', tag: 'Cappadocia Balloons & Hagia Sophia' },
    { slug: 'russia', title: 'Russia', image: 'https://images.unsplash.com/photo-1513326718677-b964603b136b?auto=format&fit=crop&w=600&q=80', tag: 'Red Square & Kremlin' },
    { slug: 'south-korea', title: 'South Korea', image: 'https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&w=600&q=80', tag: 'Seoul Palaces & Jeju Island' },
    { slug: 'kenya', title: 'Kenya', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=600&q=80', tag: 'Maasai Mara Migration' },
    { slug: 'egypt', title: 'Egypt', image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=600&q=80', tag: 'Pyramids & Nile Cruises' },
    { slug: 'mauritius', title: 'Mauritius', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80', tag: 'Coloured Earths & Beaches' },
    { slug: 'nepal', title: 'Nepal', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80', tag: 'Everest Base Camp & Pokhara' },
    { slug: 'bhutan', title: 'Bhutan', image: 'https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=600&q=80', tag: "Tiger's Nest Monastery" }
  ];

  return (
    <section className="international-holidays-section" id="international">
      <div className="container">
        <div className="section-heading-center">
          <span className="section-badge">Custom Tour Packages</span>
          <h2 className="main-section-title">International – Find Your Perfect Escape</h2>
          <p className="section-subtitle">
            Click on any destination to view famous spots slideshow & enquiry form directly in a pop-up.
          </p>
        </div>

        <div className="holidays-grid">
          {holidays.map((item, idx) => (
            <div 
              key={idx} 
              className="holiday-card hover-lift" 
              onClick={() => onSelectDestination && onSelectDestination(item.slug)}
            >
              <img src={item.image} alt={item.title} className="holiday-img" />
              <div className="holiday-overlay">
                <span className="holiday-tag">{item.tag}</span>
                <h3 className="holiday-title">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="holiday-cta-center">
          <button className="btn-dark" onClick={() => onSelectDestination && onSelectDestination('bali')}>
            <span>Explore Places</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
