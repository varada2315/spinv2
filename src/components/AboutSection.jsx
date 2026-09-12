import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Compass, ShieldCheck, UserCheck, MessageSquare, Globe, MapPin, Briefcase, ArrowRight, ChevronDown } from 'lucide-react';
import './AboutSection.css';

export default function AboutSection() {
  const [showExploreMenu, setShowExploreMenu] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const exploreOptions = [
    {
      title: 'International Services',
      desc: '24+ Worldwide Destinations & Custom Tour Packages',
      path: '/international',
      icon: Globe
    },
    {
      title: 'Domestic Services',
      desc: 'Incredible Bharat Itineraries & Himalayan Getaways',
      path: '/domestic',
      icon: MapPin
    },
    {
      title: 'Visa Services',
      desc: 'Fast, Hassle-Free Tourist & Business Visa Assistance',
      path: '/visas',
      icon: ShieldCheck
    },
    {
      title: 'B2B Services',
      desc: 'Travel Agency & Corporate Partnership Portal',
      path: '/b2b',
      icon: Briefcase
    }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowExploreMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectOption = (path) => {
    setShowExploreMenu(false);
    navigate(path);
  };

  const aboutPillars = [
    {
      icon: <UserCheck size={20} color="#00BF63" />,
      title: 'Dedicated Contact',
      desc: 'One point of contact from your first enquiry to the day you return home.'
    },
    {
      icon: <MessageSquare size={20} color="#00BF63" />,
      title: 'Clear Communication',
      desc: 'Transparent, honest guidance with zero hidden surprises.'
    },
    {
      icon: <ShieldCheck size={20} color="#00BF63" />,
      title: 'Reliable Support',
      desc: '24/7 customer care and assistance you can always count on.'
    }
  ];

  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-card-container">
          <div className="about-text-content">
            <span className="section-badge">About Spin Global</span>
            
            <h2 className="about-main-title">
              The people Behind <span className="text-green italic-title">your journey.</span>
            </h2>

            <div className="about-quote-box">
              <p className="about-quote">
                "Travel isn't measured in miles. It's measured in moments"
              </p>
            </div>

            <div className="about-body-text">
              <p className="about-paragraph">
                At <strong>Spin Global</strong>, we believe planning your trip should feel just as exciting as taking it. Whether you're applying for a visa, planning a holiday, or exploring your next destination, our goal is to make every step feel simple, personal, and well organized.
              </p>

              <p className="about-paragraph">
                From your first enquiry to the day you return home, you'll always have one dedicated point of contact, clear communication, and support you can rely on.
              </p>

              <p className="about-paragraph">
                We don't just help you reach your destination. We help make the journey there just as enjoyable.
              </p>
            </div>

            <div className="about-pillars-row">
              {aboutPillars.map((pillar, idx) => (
                <div key={idx} className="about-pillar-badge">
                  <div className="pillar-icon">{pillar.icon}</div>
                  <div>
                    <h4 className="pillar-heading">{pillar.title}</h4>
                    <p className="pillar-subtext">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive "Let's explore together" Button with Popover Options */}
            <div className="about-cta-row" ref={menuRef}>
              <button 
                type="button"
                className={`btn-primary about-explore-btn hover-lift ${showExploreMenu ? 'active' : ''}`}
                onClick={() => setShowExploreMenu(!showExploreMenu)}
                aria-haspopup="true"
                aria-expanded={showExploreMenu}
              >
                <span>Let's explore together</span>
                <ChevronDown size={18} className={`explore-chevron ${showExploreMenu ? 'rotate' : ''}`} />
              </button>

              {showExploreMenu && (
                <div className="about-explore-popover">
                  <div className="explore-popover-header">
                    <span className="popover-badge">EXPLORE OUR SERVICES</span>
                    <p className="popover-title">Select a service to explore:</p>
                  </div>
                  <div className="explore-options-list">
                    {exploreOptions.map((opt, idx) => {
                      const Icon = opt.icon;
                      return (
                        <div 
                          key={idx} 
                          className="explore-option-card"
                          onClick={() => handleSelectOption(opt.path)}
                          role="button"
                          tabIndex={0}
                        >
                          <div className="option-icon-wrap">
                            <Icon size={18} color="#00BF63" />
                          </div>
                          <div className="option-text-wrap">
                            <span className="option-title">{opt.title}</span>
                            <span className="option-desc">{opt.desc}</span>
                          </div>
                          <div className="option-arrow">
                            <ArrowRight size={16} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="about-image-column">
            <div className="img-frame-wrap">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" 
                alt="Spin Global Team - The people behind your journey" 
                className="about-team-img"
              />
              <div className="about-experience-badge">
                <span className="exp-num">100%</span>
                <span className="exp-txt">Personalised & Reliable Care</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
