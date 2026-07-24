import React from 'react';
import { Heart, Compass, ShieldCheck, UserCheck, MessageSquare, CheckCircle2 } from 'lucide-react';
import './AboutSection.css';

export default function AboutSection() {
  const whatsappLink = "https://wa.me/916284661722?text=Hello%20Spin%20Global!%20Let’s%20start%20planning%20my%20trip.%20I’m%20excited%20to%20explore%20the%20best%20travel%20options.";

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

            <div className="about-cta-row">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary about-wa-btn"
              >
                <span>Let's explore together</span>
              </a>
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
