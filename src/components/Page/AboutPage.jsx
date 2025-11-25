import React from 'react';

export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>About Doctor AI</h1>
        <p className="hero-subtitle">Making Healthcare Accessible with AI</p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2>Who We Are</h2>
          <p>
            Doctor AI is a revolutionary healthcare platform that combines artificial intelligence
            with traditional medical expertise to provide accessible, affordable, and instant
            healthcare solutions to everyone.
          </p>
          <p>
            Founded in 2025, we are on a mission to democratize healthcare by leveraging cutting-edge
            AI technology to connect patients with the right doctors at the right time.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Mission</h2>
          <div className="mission-card">
            <div className="mission-icon">🎯</div>
            <div>
              <h3>Make Healthcare Accessible</h3>
              <p>
                Break down barriers to quality healthcare by providing instant access to medical
                professionals and AI-powered health guidance, anytime and anywhere.
              </p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>How AI Helps</h2>
          <div className="ai-benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🤖</div>
              <h3>Intelligent Symptom Analysis</h3>
              <p>
                Our AI analyzes your symptoms instantly and provides possible causes, basic tips,
                and suggests the right specialist for your condition.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">⚡</div>
              <h3>Instant Recommendations</h3>
              <p>
                Get immediate doctor recommendations based on your symptoms, location, and preferences
                without waiting in long queues.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🎯</div>
              <h3>Smart Matching</h3>
              <p>
                Our AI matches you with the most suitable doctors based on specialty, experience,
                ratings, and availability.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">📊</div>
              <h3>Data-Driven Insights</h3>
              <p>
                Leverage medical data and patterns to provide accurate health guidance and preventive
                care recommendations.
              </p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Why Choose Doctor AI?</h2>
          <div className="why-choose-grid">
            <div className="choose-item">
              <span className="choose-icon">✅</span>
              <div>
                <h4>Verified Doctors</h4>
                <p>All doctors are verified medical professionals with proper qualifications</p>
              </div>
            </div>
            <div className="choose-item">
              <span className="choose-icon">⚡</span>
              <div>
                <h4>Instant Booking</h4>
                <p>Book appointments in seconds with real-time availability</p>
              </div>
            </div>
            <div className="choose-item">
              <span className="choose-icon">💻</span>
              <div>
                <h4>Online & Offline Options</h4>
                <p>Choose between video consultations or in-person visits</p>
              </div>
            </div>
            <div className="choose-item">
              <span className="choose-icon">🔒</span>
              <div>
                <h4>Privacy & Security</h4>
                <p>Your health data is encrypted and completely confidential</p>
              </div>
            </div>
            <div className="choose-item">
              <span className="choose-icon">💰</span>
              <div>
                <h4>Transparent Pricing</h4>
                <p>No hidden fees, see consultation charges upfront</p>
              </div>
            </div>
            <div className="choose-item">
              <span className="choose-icon">📱</span>
              <div>
                <h4>24/7 Availability</h4>
                <p>Access healthcare whenever you need it</p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section cta-section">
          <h2>Ready to Experience the Future of Healthcare?</h2>
          <p>Join thousands of users who trust Doctor AI for their health needs</p>
          <div className="cta-buttons">
            <a href="/signup" className="btn-cta-large primary">Get Started</a>
            <a href="/doctors" className="btn-cta-large secondary">Browse Doctors</a>
          </div>
        </section>
      </div>
    </div>
  );
}
