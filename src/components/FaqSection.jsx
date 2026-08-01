import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Search, Sparkles } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import './FaqSection.css';

export const OFFICIAL_SPIN_FAQS = [
  {
    id: 1,
    category: 'General & Services',
    question: 'What services does SPIN Global offer?',
    answer: 'SPIN Global offers fully customized domestic and international holiday packages, tourist, visitor, and business visa assistance for 20+ countries, and B2B visa solutions for travel agencies, tour operators, and corporate partners. All services are provided online, making us accessible to clients across India.'
  },
  {
    id: 2,
    category: 'Custom Holidays',
    question: 'Does SPIN Global offer fixed travel packages or customized itineraries?',
    answer: "We do not offer fixed, one-size-fits-all packages. Every itinerary is fully customized based on the traveler's preferences, budget, and requirements — whether it's a honeymoon, family holiday, or solo trip."
  },
  {
    id: 3,
    category: 'Custom Holidays',
    question: 'Do you also plan domestic holidays like Kashmir, Kerala, or Goa?',
    answer: 'Yes, alongside international holidays, we plan fully customized domestic trips across destinations like Kashmir, Kerala, Goa, Andaman, Leh Ladakh, Meghalaya, Sikkim, and Rajasthan — tailored to your preferences and budget.'
  },
  {
    id: 4,
    category: 'Custom Holidays',
    question: "I've never traveled abroad before — can SPIN Global guide me through the entire process?",
    answer: 'Absolutely. We specialize in helping first-time international travelers, guiding you through every step — from choosing the right destination and visa type to documentation and final travel — with one dedicated point of contact throughout.'
  },
  {
    id: 5,
    category: 'Custom Holidays',
    question: 'Can you help plan trips for senior citizens or families with children?',
    answer: 'Yes, we regularly plan comfortable, well-organized trips for senior citizens and families, keeping their specific needs, pace, and comfort in mind — both for domestic and international travel.'
  },
  {
    id: 6,
    category: 'General & Services',
    question: "Is SPIN Global's service available across India?",
    answer: 'Yes, SPIN Global operates fully online and serves clients across India, including tier 2 and tier 3 cities, with no requirement for in-person visits.'
  },
  {
    id: 7,
    category: 'Pricing & Payments',
    question: 'How do I get a price quote for my trip or visa?',
    answer: 'Since every trip and visa case is customized, we do not display fixed pricing. Simply share your requirements through our inquiry form or WhatsApp, and our team will get back to you with a personalized quote.'
  },
  {
    id: 8,
    category: 'Pricing & Payments',
    question: 'How can I make a payment, and is it secure?',
    answer: 'Payments can be made securely through online modes such as UPI, bank transfer, and other standard digital payment methods, directly to our registered company account. Once payment is completed, you will receive a confirmation, and an invoice or bill will be provided either at the time of payment or after your travel is completed, depending on the service.'
  },
  {
    id: 9,
    category: 'Pricing & Payments',
    question: "What is SPIN Global's refund policy?",
    answer: 'For visa services, please note that visa fees are charged and retained by the respective embassy or consulate, and approval is entirely at their discretion. Since SPIN Global pays these fees to the embassy on your behalf, visa fees are non-refundable regardless of the application outcome. For travel packages, refunds may be considered only in genuine cases such as death or medical emergencies, and are subject to the policies of our airline, hotel, and vendor partners — meaning a full refund may not always be possible depending on their terms.'
  },
  {
    id: 10,
    category: 'Visas & Processing',
    question: 'How long does visa processing take?',
    answer: 'Processing times vary by country and visa type. Once you share your travel dates and destination with us, our team will confirm the exact estimated timeline for your specific visa application.'
  },
  {
    id: 11,
    category: 'Visas & Processing',
    question: 'What documents are required for a visa application?',
    answer: 'Document requirements differ for each country and visa category (tourist, business, or visitor). Our team provides a detailed, personalized checklist once you begin your application with us.'
  },
  {
    id: 12,
    category: 'Visas & Processing',
    question: 'Does SPIN Global guarantee visa approval?',
    answer: 'Visa approval is at the sole discretion of the respective embassy or consulate. SPIN Global assists with accurate documentation, application guidance, and end-to-end support to maximize the chances of a smooth approval process.'
  },
  {
    id: 13,
    category: 'Visas & Processing',
    question: 'Can SPIN Global help with last-minute or urgent visa applications?',
    answer: 'Yes, we assist with urgent visa processing wherever the destination country allows expedited services. Please reach out to our team as early as possible for urgent cases.'
  },
  {
    id: 14,
    category: 'General & Services',
    question: 'Do I need to visit an office to avail SPIN Global’s services?',
    answer: 'No, all our services — from holiday planning to visa documentation — are handled entirely online via WhatsApp, email, and calls, so you can plan your trip from anywhere.'
  },
  {
    id: 15,
    category: 'Support & Guidance',
    question: 'Who can I contact if I have questions during my trip planning or visa process?',
    answer: 'Every client is assigned one dedicated point of contact at SPIN Global, ensuring clear communication and support throughout the process — no bouncing between different people or departments.'
  }
];

export const B2B_SPIN_FAQS = [
  {
    id: 101,
    category: 'B2B Partnership',
    question: "What is SPIN Global's B2B visa service?",
    answer: 'SPIN Global offers reliable visa processing support for travel agencies, tour operators, and corporate partners, allowing them to offer tourist, business, and visitor visa services to their own clients without managing the process in-house.'
  },
  {
    id: 102,
    category: 'B2B Partnership',
    question: 'Who can partner with SPIN Global for B2B visa services?',
    answer: 'Travel agencies, independent travel consultants, tour operators, and corporate partners looking for dependable visa processing support can partner with us.'
  },
  {
    id: 103,
    category: 'Client Protection',
    question: 'Will my clients remain mine if I partner with SPIN Global?',
    answer: 'Yes. When you partner with us, your clients stay your clients — we work behind the scenes to process visa applications while you maintain the relationship with your customer.'
  },
  {
    id: 104,
    category: 'Process & Support',
    question: 'How does the B2B partnership process work?',
    answer: "The process is simple: you share the client's requirements with us, we review the documents, we process the visa application, and you deliver a smooth experience to your client — all coordinated through one dedicated partner contact."
  },
  {
    id: 105,
    category: 'Bulk & Group Visas',
    question: 'Does SPIN Global support bulk or group visa applications?',
    answer: 'Yes, we assist travel agencies and corporate partners with bulk visa applications and group bookings, along with ongoing documentation support.'
  },
  {
    id: 106,
    category: 'Volume Requirements',
    question: 'Is there a minimum volume required to become a B2B partner?',
    answer: "No fixed minimum is required. Whether you're managing a few applications a month or handling visa requests daily, we're happy to explore a long-term partnership that fits your business."
  },
  {
    id: 107,
    category: 'Getting Started',
    question: "How can a travel agency get started with SPIN Global's B2B services?",
    answer: "Simply reach out to our team via the B2B inquiry form or contact details on our website, and we'll walk you through the partnership process."
  }
];

export default function FaqSection({ 
  customFaqs = null, 
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about our holiday packages, visa guidance, payment security, and travel support.",
  initialCategory = 'All' 
}) {
  const faqList = customFaqs || OFFICIAL_SPIN_FAQS;
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaqId, setOpenFaqId] = useState(faqList[0]?.id || 1);

  const whatsappLink = "https://wa.me/916284661722?text=Hello%20Spin%20Global!%20I%20have%20a%20question%20about%20travel%20packages%20or%20visas.";

  // Extract unique categories dynamically
  const categories = ['All', ...Array.from(new Set(faqList.map(item => item.category)))];

  const filteredFaqs = faqList.filter((faq) => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section className="faq-section-container container" id="faq">
      <div className="faq-card-box">
        <div className="faq-header-wrapper">
          <div className="faq-badge-wrap">
            <span className="section-badge">
              <Sparkles size={14} style={{ marginRight: '6px' }} />
              GOT QUESTIONS?
            </span>
          </div>
          <h2 className="faq-section-title">{title}</h2>
          <p className="faq-section-sub">{subtitle}</p>

          {/* Search Input */}
          <div className="faq-search-bar">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search questions (e.g. visa, partnership, clients, group visas, application)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button className="clear-search-btn" onClick={() => setSearchQuery('')}>Clear</button>
            )}
          </div>

          {/* Category Pills */}
          <div className="faq-category-pills">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`faq-pill ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion FAQ items */}
        <div className="faq-list-container">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`faq-item-card ${isOpen ? 'open' : ''}`}
                >
                  <button
                    className="faq-question-btn"
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                  >
                    <div className="faq-q-left">
                      <HelpCircle size={20} className="faq-icon" />
                      <span className="faq-question-text">{faq.question}</span>
                    </div>
                    <ChevronDown size={20} className={`faq-chevron ${isOpen ? 'rotate' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="faq-answer-content">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="faq-empty-state">
              <p>No questions found matching your search term.</p>
              <button className="btn-primary btn-sm" onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}>
                Reset Filters
              </button>
            </div>
          )}
        </div>

        {/* Direct Support Banner */}
        <div className="faq-support-banner">
          <div>
            <h4 className="support-banner-title">Still have a question?</h4>
            <p className="support-banner-sub">Our travel specialists are online 24/7 to assist you instantly.</p>
          </div>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-cream">
            <WhatsAppIcon size={18} color="#051923" />
            <span>Ask us on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
