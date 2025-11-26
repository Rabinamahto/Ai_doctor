import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { specialties, testimonials } from '../../data/doctorsData';

export default function Home() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/doctors?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Book Your Doctor<br />
            <span className="gradient-text">Anytime, Anywhere</span>
          </h1>
          <p className="hero-subtitle">
            Get instant access to top doctors and seamless appointment booking
          </p>
          
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hero-search">
            <input
              type="text"
              placeholder="Search Doctors, Speciality, Location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-btn">
              🔍 Search
            </button>
          </form>

          {/* Quick Links */}
          <div className="quick-links">
            <button onClick={() => navigate('/appointment')} className="quick-link-card primary">
              <span className="icon">📅</span>
              <span className="label">Book Appointment</span>
            </button>
            {/* AI assistant quick link removed */}
            <button onClick={() => navigate('/emergency')} className="quick-link-card danger">
              <span className="icon">🚨</span>
              <span className="label">Emergency Help</span>
            </button>
          </div>
        </div>
      </section>

      {/* Popular Specialties */}
      <section className="specialties-section">
        <h2 className="section-title">Popular Specialties</h2>
        <p className="section-subtitle">Find doctors by specialty</p>
        <div className="specialties-grid">
          {specialties.map((spec, idx) => (
            <div
              key={idx}
              className="specialty-card"
              onClick={() => navigate(`/doctors?specialty=${spec.name}`)}
            >
              <div className="specialty-icon">{spec.icon}</div>
              <h3 className="specialty-name">{spec.name}</h3>
              <p className="specialty-desc">{spec.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Platform: removed per request */}

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Get Started?</h2>
          <p className="cta-subtitle">Book your consultation now or get quick health tips</p>
          <div className="cta-buttons">
            <button onClick={() => navigate('/doctors')} className="btn-cta primary">
              📅 Book Now
            </button>
            <button onClick={() => navigate('/doctors')} className="btn-cta secondary">
              � Find a Doctor
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <h2 className="section-title">What Our Users Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((test) => (
            <div key={test.id} className="testimonial-card">
              <div className="stars">{'⭐'.repeat(test.rating)}</div>
              <p className="review-text">"{test.review}"</p>
              <div className="reviewer-info">
                <strong>{test.name}</strong>
                <span className="review-date">{test.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
