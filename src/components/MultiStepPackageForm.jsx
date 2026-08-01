import React, { useState } from 'react';
import { X, Send, ArrowRight, ArrowLeft, Check, Compass, User, Phone, Mail, Calendar, MapPin, Users, DollarSign, Hotel, Sparkles, Globe } from 'lucide-react';
import { submitLeadToCRM } from '../services/leadService';
import SuccessScreenModal from './SuccessScreenModal';
import './MultiStepPackageForm.css';

export default function MultiStepPackageForm({ initialDestination = '', onClose, onSubmitted }) {
  const [step, setStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Step 1 State
  const [tripType, setTripType] = useState('International');
  const [destination, setDestination] = useState(initialDestination || '');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  // Step 2 State
  const [travelDates, setTravelDates] = useState('');
  const [departureCity, setDepartureCity] = useState('');
  const [adults, setAdults] = useState('2');
  const [children, setChildren] = useState('0');
  const [childrenAges, setChildrenAges] = useState('');

  // Step 3 State
  const [budgetType, setBudgetType] = useState('50K–70K per person');
  const [customBudget, setCustomBudget] = useState('');
  const [hotelPref, setHotelPref] = useState('4 Star');
  const [specialReq, setSpecialReq] = useState('');

  const handleNextStep = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const finalBudget = budgetType === 'Custom' ? customBudget : budgetType;

    const leadData = {
      tripType,
      destination,
      name,
      phone,
      email,
      travelDates,
      departureCity,
      travelers: {
        adults,
        children,
        childrenAges: children > 0 ? childrenAges : 'N/A'
      },
      budgetRange: finalBudget,
      hotelPreference: hotelPref,
      specialRequirements: specialReq
    };

    await submitLeadToCRM(leadData, 'Multi-Step Package Inquiry');

    setSubmitting(false);
    setShowSuccess(true);

    if (onSubmitted) {
      onSubmitted(`Thank you ${name}! ${tripType} package inquiry for ${destination} received.`);
    }
  };

  return (
    <>
      {!showSuccess && (
        <div className="multistep-backdrop" onClick={onClose}>
          <div className="multistep-card" onClick={(e) => e.stopPropagation()}>
            <button className="multistep-close-btn" onClick={onClose} aria-label="Close form">
              <X size={20} />
            </button>

            {/* Header & Step Indicator */}
            <div className="multistep-header">
              <div className="multistep-badge">
                <Sparkles size={14} />
                <span>STEP {step} OF 3</span>
              </div>
              <h2 className="multistep-title">Plan Your Dream Trip</h2>
              <p className="multistep-sub">Get a 100% customized itinerary tailored to your dates and budget.</p>

              {/* Progress Bar */}
              <div className="step-progress-bar">
                <div className={`step-dot ${step >= 1 ? 'active' : ''}`}>1</div>
                <div className={`step-line ${step >= 2 ? 'active' : ''}`} />
                <div className={`step-dot ${step >= 2 ? 'active' : ''}`}>2</div>
                <div className={`step-line ${step >= 3 ? 'active' : ''}`} />
                <div className={`step-dot ${step >= 3 ? 'active' : ''}`}>3</div>
              </div>
            </div>

            {/* STEP 1: Trip Category, Basic Info & Destination */}
            {step === 1 && (
              <form onSubmit={handleNextStep} className="multistep-form-body">
                <div className="multi-field">
                  <label>1. Select Trip Category *</label>
                  <div className="trip-type-selector">
                    <button
                      type="button"
                      className={`trip-type-chip ${tripType === 'International' ? 'selected' : ''}`}
                      onClick={() => setTripType('International')}
                    >
                      <Globe size={16} />
                      <span>International Trip</span>
                    </button>

                    <button
                      type="button"
                      className={`trip-type-chip ${tripType === 'Domestic' ? 'selected' : ''}`}
                      onClick={() => setTripType('Domestic')}
                    >
                      <MapPin size={16} />
                      <span>Domestic (Incredible Bharat)</span>
                    </button>
                  </div>
                </div>

                <div className="multi-field">
                  <label>2. Destination *</label>
                  <div className="multi-input-wrap">
                    <Compass size={18} className="multi-field-icon" />
                    <input
                      type="text"
                      placeholder={
                        tripType === 'International'
                          ? 'e.g. Bali, Dubai, Vietnam, Maldives, Europe, Japan'
                          : 'e.g. Kashmir, Leh Ladakh, Kerala, Goa, Rajasthan'
                      }
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="multi-field">
                  <label>3. Full Name *</label>
                  <div className="multi-input-wrap">
                    <User size={18} className="multi-field-icon" />
                    <input
                      type="text"
                      placeholder="Rahul Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="multi-field">
                    <label>4. Contact No. / WhatsApp *</label>
                    <div className="multi-input-wrap">
                      <Phone size={18} className="multi-field-icon" />
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="multi-field">
                    <label>5. Email Address *</label>
                    <div className="multi-input-wrap">
                      <Mail size={18} className="multi-field-icon" />
                      <input
                        type="email"
                        placeholder="rahul@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="multistep-actions">
                  <button type="submit" className="btn-primary step-btn-next">
                    <span>Continue to Step 2</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              </form>
            )}

            {/* STEP 2: Travel Dates & Passengers */}
            {step === 2 && (
              <form onSubmit={handleNextStep} className="multistep-form-body">
                <div className="form-grid-2">
                  <div className="multi-field">
                    <label>6. Tentative Travel Dates *</label>
                    <div className="multi-input-wrap">
                      <Calendar size={18} className="multi-field-icon" />
                      <input
                        type="date"
                        value={travelDates}
                        onChange={(e) => setTravelDates(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="multi-field">
                    <label>7. Departure City *</label>
                    <div className="multi-input-wrap">
                      <MapPin size={18} className="multi-field-icon" />
                      <input
                        type="text"
                        placeholder="e.g. New Delhi, Chandigarh, Mumbai"
                        value={departureCity}
                        onChange={(e) => setDepartureCity(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="multi-field">
                  <label>8. Number of Travelers *</label>
                  <div className="travelers-counter-grid">
                    <div className="counter-box">
                      <span className="counter-label">Adults (12+ yrs)</span>
                      <select value={adults} onChange={(e) => setAdults(e.target.value)}>
                        <option value="1">1 Adult</option>
                        <option value="2">2 Adults (Couple)</option>
                        <option value="3">3 Adults</option>
                        <option value="4">4 Adults</option>
                        <option value="5+">5+ Group</option>
                      </select>
                    </div>

                    <div className="counter-box">
                      <span className="counter-label">Children (below 12)</span>
                      <select value={children} onChange={(e) => setChildren(e.target.value)}>
                        <option value="0">0 Children</option>
                        <option value="1">1 Child</option>
                        <option value="2">2 Children</option>
                        <option value="3+">3+ Children</option>
                      </select>
                    </div>
                  </div>
                </div>

                {parseInt(children) > 0 && (
                  <div className="multi-field">
                    <label>Children's Age(s)</label>
                    <div className="multi-input-wrap">
                      <Users size={18} className="multi-field-icon" />
                      <input
                        type="text"
                        placeholder="e.g. 5 yrs, 8 yrs"
                        value={childrenAges}
                        onChange={(e) => setChildrenAges(e.target.value)}
                      />
                    </div>
                  </div>
                )}

                <div className="multistep-actions flex-between">
                  <button type="button" className="btn-secondary step-btn-back" onClick={handlePrevStep}>
                    <ArrowLeft size={18} />
                    <span>Back</span>
                  </button>
                  <button type="submit" className="btn-primary step-btn-next">
                    <span>Continue to Step 3</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              </form>
            )}

            {/* STEP 3: Budget & Preferences */}
            {step === 3 && (
              <form onSubmit={handleSubmit} className="multistep-form-body">
                <div className="multi-field">
                  <label>9. Budget Range per Person *</label>
                  <div className="budget-options-list">
                    {['30K–50K per person', '50K–70K per person', '70K+ per person', 'Custom'].map((b) => (
                      <button
                        key={b}
                        type="button"
                        className={`budget-chip ${budgetType === b ? 'selected' : ''}`}
                        onClick={() => setBudgetType(b)}
                      >
                        {b}
                      </button>
                    ))}
                  </div>

                  {budgetType === 'Custom' && (
                    <div className="multi-input-wrap mt-8">
                      <DollarSign size={18} className="multi-field-icon" />
                      <input
                        type="text"
                        placeholder="Enter custom budget (e.g. ₹1,20,000 per person)"
                        value={customBudget}
                        onChange={(e) => setCustomBudget(e.target.value)}
                        required
                      />
                    </div>
                  )}
                </div>

                <div className="multi-field">
                  <label>10. Hotel Preference *</label>
                  <div className="hotel-pref-row">
                    {['3 Star', '4 Star', '5 Star'].map((h) => (
                      <button
                        key={h}
                        type="button"
                        className={`hotel-chip ${hotelPref === h ? 'selected' : ''}`}
                        onClick={() => setHotelPref(h)}
                      >
                        <Hotel size={16} />
                        <span>{h}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="multi-field">
                  <label>11. Any Special Requirements</label>
                  <div className="multi-input-wrap textarea-wrap">
                    <textarea
                      rows="2"
                      placeholder="Honeymoon inclusions, veg meal preferences, specific flights..."
                      value={specialReq}
                      onChange={(e) => setSpecialReq(e.target.value)}
                    ></textarea>
                  </div>
                </div>

                <div className="multistep-actions flex-between">
                  <button type="button" className="btn-secondary step-btn-back" onClick={handlePrevStep}>
                    <ArrowLeft size={18} />
                    <span>Back</span>
                  </button>
                  <button type="submit" className="btn-primary step-btn-submit" disabled={submitting}>
                    <span>{submitting ? 'Connecting...' : 'Connect With Our Team'}</span>
                    <Send size={18} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {showSuccess && (
        <SuccessScreenModal onClose={onClose} />
      )}
    </>
  );
}
