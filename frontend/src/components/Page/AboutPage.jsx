import React from 'react';

export default function AboutPage() {
  return (
    <div className="about-page">
        <div className="about-hero">
        <h1>About Hello Doctor</h1>
        <p className="hero-subtitle">Making Healthcare Accessible with AI</p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2>Who We Are</h2>
            <p>
            Hello Doctor is a revolutionary healthcare platform that combines artificial intelligence
            with traditional medical expertise to provide accessible, affordable, and instant
            healthcare solutions to everyone.
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
      </div>
    </div>
  );
}
