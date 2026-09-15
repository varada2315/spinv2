import React from 'react';
import './InternationalHolidays.css';

export default function InternationalHolidays({ onSelectDestination }) {
  const holidays = [
    { slug: 'bali', title: 'Indonesia (Bali)', image: '/images/intl/bali.jpg', webp: '/images/intl/bali.webp', tag: 'Tanah Lot & Ubud Terraces' },
    { slug: 'uae', title: 'UAE (Dubai)', image: '/images/intl/uae.jpg', webp: '/images/intl/uae.webp', tag: 'Burj Khalifa & Desert Safari' },
    { slug: 'vietnam', title: 'Vietnam', image: '/images/intl/vietnam.jpg', webp: '/images/intl/vietnam.webp', tag: 'Ba Na Hills & Golden Bridge' },
    { slug: 'thailand', title: 'Thailand', image: '/images/intl/thailand.jpg', webp: '/images/intl/thailand.webp', tag: 'Phi Phi Islands & Temples' },
    { slug: 'singapore', title: 'Singapore', image: '/images/intl/singapore.jpg', webp: '/images/intl/singapore.webp', tag: 'Gardens by the Bay & Sentosa', objectPosition: 'center center' },
    { slug: 'malaysia', title: 'Malaysia', image: '/images/intl/malaysia.jpg', webp: '/images/intl/malaysia.webp', tag: 'Petronas Towers & Langkawi' },
    { slug: 'japan', title: 'Japan', image: '/images/intl/japan.jpg', webp: '/images/intl/japan.webp', tag: 'Fushimi Inari & Bamboo Grove' },
    { slug: 'schengen', title: 'Schengen (Europe)', image: '/images/intl/schengen.jpg', webp: '/images/intl/schengen.webp', tag: 'Eiffel Tower & Swiss Alps' },
    { slug: 'sri-lanka', title: 'Sri Lanka', image: '/images/intl/sri-lanka.jpg', webp: '/images/intl/sri-lanka.webp', tag: 'Sigiriya Rock & Nine Arch' },
    { slug: 'philippines', title: 'Philippines', image: '/images/intl/philippines.jpg', webp: '/images/intl/philippines.webp', tag: 'Coron Lagoons & Bohol' },
    { slug: 'georgia', title: 'Georgia', image: '/images/intl/georgia.jpg', webp: '/images/intl/georgia.webp', tag: 'Holy Trinity & Caucasus Peaks', objectPosition: 'center top' },
    { slug: 'kazakhstan', title: 'Kazakhstan', image: '/images/intl/kazakhstan.jpg', webp: '/images/intl/kazakhstan.webp', tag: 'Charyn Canyon & Kolsai Lakes' },
    { slug: 'maldives', title: 'Maldives', image: '/images/intl/maldives.jpg', webp: '/images/intl/maldives.webp', tag: 'Luxury Overwater Villas & Reefs' },
    { slug: 'azerbaijan', title: 'Azerbaijan', image: '/images/intl/azerbaijan.jpg', webp: '/images/intl/azerbaijan.webp', tag: 'Flame Towers & Baku Boulevard' },
    { slug: 'turkey', title: 'Turkey', image: '/images/intl/turkey.jpg', webp: '/images/intl/turkey.webp', tag: 'Cappadocia Hot Air Balloons' },
    { slug: 'seychelles', title: 'Seychelles', image: '/images/intl/seychelles.jpg', webp: '/images/intl/seychelles.webp', tag: 'La Digue & Granite Beaches' },
    { slug: 'south-korea', title: 'South Korea', image: '/images/intl/south-korea.jpg', webp: '/images/intl/south-korea.webp', tag: 'N Seoul Tower & Jeju Island' },
    { slug: 'kenya', title: 'Kenya', image: '/images/intl/kenya.jpg', webp: '/images/intl/kenya.webp', tag: 'Maasai Mara & Kilimanjaro' },
    { slug: 'egypt', title: 'Egypt', image: '/images/intl/egypt.jpg', webp: '/images/intl/egypt.webp', tag: 'Pyramids & Nile Cruises' },
    { slug: 'mauritius', title: 'Mauritius', image: '/images/intl/mauritius.jpg', webp: '/images/intl/mauritius.webp', tag: 'Coloured Earths & Beaches' },
    { slug: 'nepal', title: 'Nepal', image: '/images/intl/nepal.jpg', webp: '/images/intl/nepal.webp', tag: 'Mount Everest & Pokhara' },
    { slug: 'bhutan', title: 'Bhutan', image: '/images/intl/bhutan.jpg', webp: '/images/intl/bhutan.webp', tag: "Tiger's Nest & Punakha Valley" },
    { slug: 'hong-kong', title: 'Hong Kong', image: '/images/intl/hong-kong.jpg', webp: '/images/intl/hong-kong.webp', tag: 'Victoria Harbour & Disneyland' },
    { slug: 'china', title: 'China', image: '/images/intl/china.jpg', webp: '/images/intl/china.webp', tag: 'Great Wall & Forbidden City' }
  ];

  return (
    <section className="international-holidays-section" id="international">
      <div className="container">
        <div className="section-heading-center">
          <span className="section-badge">Custom Tour Packages</span>
          <h2 className="main-section-title">Find Your Perfect Escape</h2>
          <p className="section-subtitle">
            Handcrafted international travel packages across Bali, Europe, Dubai, Thailand, Singapore, Japan, Vietnam & top global destinations.
          </p>
        </div>

        <div className="holidays-grid">
          {holidays.map((item, idx) => (
            <div
              key={idx}
              className="holiday-card hover-lift"
              onClick={() => onSelectDestination && onSelectDestination(item.slug)}
            >
              <picture className="holiday-picture">
                <source srcSet={item.webp} type="image/webp" />
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="holiday-img" 
                  style={item.objectPosition ? { objectPosition: item.objectPosition } : undefined}
                  loading="eager" 
                  decoding="async"
                  fetchPriority={idx < 8 ? "high" : "auto"}
                />
              </picture>
              <div className="holiday-overlay">
                <span className="holiday-tag">{item.tag}</span>
                <h3 className="holiday-title">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
