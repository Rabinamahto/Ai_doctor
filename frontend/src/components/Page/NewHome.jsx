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
            Get instant access to top doctors, AI health assistance, and seamless appointment booking
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
            <button onClick={() => navigate('/ai-assistant')} className="quick-link-card secondary">
              <span className="icon">🤖</span>
              <span className="label">AI Health Assistant</span>
            </button>
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

      {/* About Platform */}
      <section className="about-section">
        <div className="about-content">
          <h2 className="section-title">Why Choose Hello Doctor?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🤖</div>
              <h3>AI-Powered Health Assistant</h3>
              <p>Get instant health guidance and doctor recommendations based on your symptoms</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Instant Booking</h3>
              <p>Book appointments with top doctors in just a few clicks, anytime</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏥</div>
              <h3>Verified Doctors</h3>
              <p>All doctors are verified professionals with years of experience</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💻</div>
              <h3>Online & Offline</h3>
              <p>Choose between online consultations or in-person visits</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Get Started?</h2>
          <p className="cta-subtitle">Book your consultation now or chat with our AI assistant</p>
          <div className="cta-buttons">
            <button onClick={() => navigate('/doctors')} className="btn-cta primary">
              📅 Book Now
            </button>
            <button onClick={() => navigate('/ai-assistant')} className="btn-cta secondary">
              🤖 Ask AI
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
