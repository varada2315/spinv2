import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { destinationsData } from '../data/destinationsData';
import { MapPin, Calendar, Users, Send, MessageCircle, ArrowLeft, CheckCircle2, Compass, Sparkles } from 'lucide-react';
import './DestinationDetailPage.css';

export default function DestinationDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find matching destination or default fallback
  const destination = destinationsData[id?.toLowerCase()] || destinationsData['bali'];

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    travelDate: '',
    selectedSpot: 'All Famous Spots',
    notes: ''
  });
  const [adults, setAdults] = useState('1');
  const [children, setChildren] = useState('0');
  const [infants, setInfants] = useState('0');

  const [submitted, setSubmitted] = useState(false);

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const totalTravelers = (parseInt(adults) || 1) + (parseInt(children) || 0) + (parseInt(infants) || 0);

    const messageText = `Hello Spin Global! I would like to enquire about a trip to *${destination.name}*.\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📞 *Phone:* ${formData.phone}\n` +
      `📅 *Travel Date:* ${formData.travelDate || 'Flexible'}\n` +
      `👥 *Travelers:* ${adults} Adult(s), ${children} Child(ren), ${infants} Infant(s) (Total: ${totalTravelers})\n` +
      `📍 *Interested Spots:* ${formData.selectedSpot}\n` +
      `📝 *Special Requests:* ${formData.notes || 'None'}\n\n` +
      `Please contact me with package details & prices. Thank you!`;

    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/916284661722?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');

    setTimeout(() => setSubmitted(false), 4000);
  };

  const backLink = destination.category === 'Domestic' ? '/domestic' : '/international';

  return (
    <div className="destination-detail-page">
      {/* 1. Destination Hero Banner */}
      <div className="dest-detail-hero">
        <img src={destination.heroImage} alt={destination.name} className="dest-hero-bg" />
        <div className="dest-hero-overlay" />
        <div className="container dest-hero-container">
          <Link to={backLink} className="back-link-btn">
            <ArrowLeft size={16} />
            <span>Back to {destination.category}</span>
          </Link>

          <div className="dest-hero-info">
            <span className="dest-cat-badge">{destination.category} Destination</span>
            <h1 className="dest-hero-title">{destination.name}</h1>
            <p className="dest-hero-tagline">{destination.tagline}</p>
          </div>
        </div>
      </div>

      <div className="container dest-content-body">
        {/* Destination Brief */}
        <div className="dest-overview-card">
          <div className="overview-icon"><Compass size={24} color="#00BF63" /></div>
          <div>
            <h3>Explore {destination.name}</h3>
            <p>{destination.description}</p>
          </div>
        </div>

        {/* 2. Famous Tourist Spots Section */}
        <section className="famous-spots-section">
          <div className="spots-header">
            <span className="section-badge">Must-Visit Landmarks</span>
            <h2 className="spots-main-title">Famous Tourist Spots in {destination.name}</h2>
            <p className="spots-sub-title">Explore top-rated attractions and famous places included in our custom itineraries.</p>
          </div>

          <div className="spots-grid">
            {destination.spots && destination.spots.map((spot, idx) => (
              <div key={idx} className="spot-card hover-lift">
                <div className="spot-image-wrapper">
                  <img src={spot.image} alt={spot.name} className="spot-img" />
                  <span className="spot-number-tag">#{idx + 1}</span>
                </div>
                <div className="spot-content-box">
                  <h3 className="spot-name">{spot.name}</h3>
                  <p className="spot-desc">{spot.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. WhatsApp Enquiry Form (Right below tourist spots) */}
        <section className="dest-enquiry-section">
          <div className="dest-enquiry-card">
            <div className="enquiry-card-header">
              <div className="wa-icon-badge">
                <MessageCircle size={28} color="#FFFFFF" />
              </div>
              <div className="enquiry-header-text">
                <h3 className="enquiry-title">Enquire About {destination.name}</h3>
                <p className="enquiry-subtitle">
                  Fill in your travel preferences below to get custom itinerary options & direct quotes sent via WhatsApp!
                </p>
              </div>
            </div>

            <form onSubmit={handleWhatsAppSubmit} className="dest-wa-form">
              <div className="form-row-2">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Phone / WhatsApp Number *</label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="form-row-3">
                <div className="form-group">
                  <label>Preferred Travel Date</label>
                  <input
                    type="date"
                    value={formData.travelDate}
                    onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                  />
                </div>

              <div className="travelers-selector-group">
                <div className="travelers-3col-grid">
                  <div className="traveler-col-item">
                    <span className="traveler-col-label">ADULTS</span>
                    <select
                      value={adults}
                      onChange={(e) => setAdults(e.target.value)}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10+">10+</option>
                    </select>
                  </div>

                  <div className="traveler-col-item">
                    <span className="traveler-col-label">CHILDREN</span>
                    <select
                      value={children}
                      onChange={(e) => setChildren(e.target.value)}
                    >
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5+">5+</option>
                    </select>
                  </div>

                  <div className="traveler-col-item">
                    <span className="traveler-col-label">INFANTS</span>
                    <select
                      value={infants}
                      onChange={(e) => setInfants(e.target.value)}
                    >
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3+">3+</option>
                    </select>
                  </div>
                </div>

                <div className="total-travelers-bar">
                  <span>Total Travelers:</span>
                  <span className="total-travelers-num-badge">
                    {(parseInt(adults) || 1) + (parseInt(children) || 0) + (parseInt(infants) || 0)}
                  </span>
                </div>
              </div>

                <div className="form-group">
                  <label>Interested Tourist Spot</label>
                  <select
                    value={formData.selectedSpot}
                    onChange={(e) => setFormData({ ...formData, selectedSpot: e.target.value })}
                  >
                    <option value="All Famous Spots">All Famous Spots Package</option>
                    {destination.spots && destination.spots.map((spot, sIdx) => (
                      <option key={sIdx} value={spot.name}>{spot.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Special Requests / Questions</label>
                <textarea
                  rows="3"
                  placeholder="Mention any specific hotels, meal preferences, or flight inclusions required..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="btn-primary dest-submit-wa-btn">
                <MessageCircle size={20} />
                <span>{submitted ? 'Opening WhatsApp...' : 'Send Enquiry on WhatsApp (+91 62846-61722)'}</span>
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
