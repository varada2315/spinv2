import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Globe, Shield, ArrowRight, Sparkles, Building2, FileText, ChevronRight, PhoneCall, MessageCircle, Send } from 'lucide-react';
import './HeroSearchBar.css';

const SEARCH_INDEX = [
  // PAGES
  { id: 1, title: 'About Spin Global', category: 'Page', link: '/about', icon: Building2, tags: ['about', 'company', 'story', 'team', 'incredible bharat', 'who we are'] },
  { id: 2, title: 'International Holidays & Tours', category: 'Page', link: '/international', icon: Globe, tags: ['international', 'overseas', 'holidays', 'tours', 'packages', 'vacation', 'abroad'] },
  { id: 3, title: 'Incredible Bharat - Domestic Packages', category: 'Page', link: '/domestic', icon: MapPin, tags: ['domestic', 'india', 'bharat', 'trips', 'indian holidays', 'destinations'] },
  { id: 4, title: 'Tourist & Business Visas Assistance', category: 'Page', link: '/visas', icon: Shield, tags: ['visa', 'visas', 'visa support', 'stamp', 'passport', 'immigration', 'visitor visa', 'tourist visa', 'business visa'] },
  { id: 5, title: 'B2B Travel Agency Partner Portal', category: 'Page', link: '/b2b', icon: FileText, tags: ['b2b', 'corporate', 'partner', 'agency', 'wholesale', 'travel agent', 'b2b portal'] },
  { id: 6, title: 'Contact Us & Office Details', category: 'Page', link: '/contact', icon: MapPin, tags: ['contact', 'office', 'phone', 'whatsapp', 'address', 'ludhiana', 'email'] },

  // DESTINATIONS (INTERNATIONAL)
  { id: 7, title: 'Bali, Indonesia', category: 'International Destination', link: '/international', icon: Globe, tags: ['bali', 'indonesia', 'ubud', 'tanah lot', 'nusa penida', 'beach', 'temple'] },
  { id: 8, title: 'Dubai & Abu Dhabi, UAE', category: 'International Destination', link: '/international', icon: Globe, tags: ['dubai', 'uae', 'abu dhabi', 'burj khalifa', 'desert safari', 'emirates'] },
  { id: 9, title: 'Vietnam (Ha Long Bay & Da Nang)', category: 'International Destination', link: '/international', icon: Globe, tags: ['vietnam', 'ha long bay', 'da nang', 'hanoi', 'golden bridge'] },
  { id: 10, title: 'Thailand (Phuket & Bangkok)', category: 'International Destination', link: '/international', icon: Globe, tags: ['thailand', 'phuket', 'bangkok', 'krabi', 'phi phi', 'islands'] },
  { id: 11, title: 'Maldives Luxury Overwater Villas', category: 'International Destination', link: '/international', icon: Globe, tags: ['maldives', 'overwater villa', 'honeymoon', 'island', 'beach', 'resort'] },
  { id: 12, title: 'Switzerland & Swiss Alps', category: 'International Destination', link: '/international', icon: Globe, tags: ['switzerland', 'swiss', 'alps', 'zurich', 'interlaken', 'europe', 'snow'] },
  { id: 13, title: 'Europe Tour (Paris, Rome, Amsterdam)', category: 'International Destination', link: '/international', icon: Globe, tags: ['europe', 'paris', 'france', 'rome', 'italy', 'amsterdam', 'london'] },
  { id: 14, title: 'Japan (Tokyo & Kyoto)', category: 'International Destination', link: '/international', icon: Globe, tags: ['japan', 'tokyo', 'kyoto', 'fuji', 'cherry blossom', 'asia'] },
  { id: 15, title: 'Singapore & Malaysia', category: 'International Destination', link: '/international', icon: Globe, tags: ['singapore', 'malaysia', 'kuala lumpur', 'sentosa', 'genting'] },
  { id: 16, title: 'Turkey (Istanbul & Cappadocia)', category: 'International Destination', link: '/international', icon: Globe, tags: ['turkey', 'cappadocia', 'istanbul', 'balloon', 'hagiasophia'] },

  // DESTINATIONS (DOMESTIC INDIA)
  { id: 17, title: 'Kashmir Valley & Gulmarg', category: 'Domestic Destination', link: '/domestic', icon: MapPin, tags: ['kashmir', 'srinagar', 'gulmarg', 'snow', 'dal lake', 'pahalgam'] },
  { id: 18, title: 'Leh Ladakh Adventure', category: 'Domestic Destination', link: '/domestic', icon: MapPin, tags: ['ladakh', 'leh', 'pangong', 'khardungla', 'bikes', 'adventure'] },
  { id: 19, title: 'Rajasthan Royal Palaces', category: 'Domestic Destination', link: '/domestic', icon: MapPin, tags: ['rajasthan', 'jaipur', 'udaipur', 'jaisalmer', 'palace', 'fort'] },
  { id: 20, title: 'Kerala Backwaters & Munnar', category: 'Domestic Destination', link: '/domestic', icon: MapPin, tags: ['kerala', 'munnar', 'alleppey', 'houseboat', 'backwaters', 'gods own country'] },
  { id: 21, title: 'Goa Beaches & Cruises', category: 'Domestic Destination', link: '/domestic', icon: MapPin, tags: ['goa', 'beach', 'party', 'water sports', 'cruise', 'south goa'] },
  { id: 22, title: 'Himachal (Manali & Shimla)', category: 'Domestic Destination', link: '/domestic', icon: MapPin, tags: ['himachal', 'manali', 'shimla', 'solang', 'snow', 'rohtang'] },

  // SERVICES
  { id: 23, title: 'Fast Visa Support & Processing', category: 'Service', link: '/visas', icon: Shield, tags: ['visa assistance', 'visa process', 'schengen visa', 'us visa', 'uk visa', 'dubai visa'] },
  { id: 24, title: 'Tailor-Made Holiday Packages', category: 'Service', link: '/international', icon: Sparkles, tags: ['holiday packages', 'custom tour', 'itinerary', 'tailor made'] },
  { id: 25, title: 'Corporate Travel & B2B Solutions', category: 'Service', link: '/b2b', icon: Building2, tags: ['corporate travel', 'b2b', 'mice', 'conferences', 'events'] }
];

export default function HeroSearchBar({ onOpenInquiry }) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const navigate = useNavigate();
  const searchWrapperRef = useRef(null);

  // Filter search results
  const results = query.trim() === '' ? [] : SEARCH_INDEX.filter((item) => {
    const q = query.toLowerCase().trim();
    const titleMatch = item.title.toLowerCase().includes(q);
    const categoryMatch = item.category.toLowerCase().includes(q);
    const tagMatch = item.tags.some((tag) => tag.toLowerCase().includes(q));
    return titleMatch || categoryMatch || tagMatch;
  });

  // Handle outside clicks to close dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchWrapperRef.current && !searchWrapperRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleOpenCustomConnect = () => {
    setIsOpen(false);
    if (onOpenInquiry) {
      onOpenInquiry({ destination: query, title: `Custom Package for ${query}` });
    }
  };

  const handleExecuteSearch = (targetItem) => {
    if (targetItem) {
      setIsOpen(false);
      navigate(targetItem.link);
    } else if (query.trim()) {
      handleOpenCustomConnect();
    } else {
      setIsOpen(true);
    }
  };

  // Keyboard navigation (Arrow keys & Enter)
  const handleKeyDown = (e) => {
    if (!isOpen || results.length === 0) {
      if (e.key === 'Enter' && query.trim()) {
        e.preventDefault();
        handleExecuteSearch(results[0]);
      }
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (results.length > 0) {
        const target = selectedIndex >= 0 && selectedIndex < results.length ? results[selectedIndex] : results[0];
        handleExecuteSearch(target);
      } else {
        handleOpenCustomConnect();
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  // Highlight matching keyword helper
  const renderHighlightedText = (text, highlight) => {
    if (!highlight.trim()) return text;
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, idx) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span key={idx} className="search-highlight">{part}</span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="hero-search-wrapper" ref={searchWrapperRef}>
      <div className={`hero-search-bar ${isOpen ? 'active-open' : ''}`}>
        <Search size={22} className="left-search-icon" />

        <input
          type="text"
          className="hero-search-input"
          placeholder="Search destinations, packages, visas, or services..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
            setSelectedIndex(-1);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          aria-label="Search destinations, packages, visas or services"
        />

        <button
          type="button"
          className="search-submit-btn"
          onClick={() => {
            if (results.length > 0) {
              const target = selectedIndex >= 0 && selectedIndex < results.length ? results[selectedIndex] : results[0];
              handleExecuteSearch(target);
            } else {
              handleExecuteSearch(null);
            }
          }}
          aria-label="Submit search"
        >
          <Search size={20} />
        </button>
      </div>

      {/* Live Dropdown Suggestions */}
      {isOpen && query.trim() !== '' && (
        <div className="hero-search-dropdown">
          {results.length > 0 ? (
            <div className="search-results-list">
              <div className="dropdown-section-header">
                <span>SUGGESTED RESULTS</span>
                <span className="results-count">{results.length} found</span>
              </div>
              {results.map((item, idx) => {
                const IconComponent = item.icon;
                const isSelected = idx === selectedIndex;
                return (
                  <div
                    key={item.id}
                    className={`search-result-item ${isSelected ? 'selected' : ''}`}
                    onClick={() => handleExecuteSearch(item)}
                    onMouseEnter={() => setSelectedIndex(idx)}
                  >
                    <div className="result-icon-box">
                      <IconComponent size={18} color="#00BF63" />
                    </div>
                    <div className="result-text-box">
                      <span className="result-title">
                        {renderHighlightedText(item.title, query)}
                      </span>
                      <span className="result-category">{item.category}</span>
                    </div>
                    <ChevronRight size={18} className="result-arrow" />
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="search-assistance-card">
              <div className="assistance-mascot-wrap">
                <img src="/images/spin-mascot.png" alt="Spinny Mascot Guide" className="assistance-mascot-img" />
              </div>

              <div className="assistance-info">
                <h4 className="assistance-title">Couldn't find your destination?</h4>
                <p className="assistance-sub">
                  Our travel experts can help you plan a customized itinerary for <strong>"{query}"</strong>!
                </p>

                <div className="assistance-actions-row">
                  <button
                    type="button"
                    className="btn-assist btn-assist-connect"
                    onClick={handleOpenCustomConnect}
                  >
                    <Send size={15} />
                    <span>Connect & Plan "{query}"</span>
                  </button>

                  <a
                    href={`https://wa.me/916284661722?text=${encodeURIComponent(`Hello Spin Global! I searched for "${query}" on your website and would like a custom package itinerary.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-assist btn-assist-wa"
                  >
                    <MessageCircle size={15} />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href="tel:6284661722"
                    className="btn-assist btn-assist-call"
                  >
                    <PhoneCall size={15} />
                    <span>Call Us</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
