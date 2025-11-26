import React from 'react';

export default function AboutPage() {
  return (
    <div className="about-page">
        <div className="about-hero">
        <h1>About Hello Doctor</h1>
        <p className="hero-subtitle">Making Healthcare Accessible</p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2>Who We Are</h2>
            <p>
            Hello Doctor is a revolutionary healthcare platform that combines practical tools
            with trusted medical expertise to provide accessible, affordable, and reliable
            healthcare solutions for everyone.
          </p>
          <p>
            Founded by a team of clinicians and engineers, Hello Doctor began with a simple goal:
            reduce friction between patients and doctors. We focus on building straightforward
            tools that help people find the right doctor quickly, understand basic next steps,
            and manage appointments without paperwork.
          </p>
          <p>
            Our approach values transparency and usability — clear doctor profiles, honest
            reviews, and a lightweight booking experience so users spend less time searching and
            more time getting care.
          </p>
        </section>
      </div>
    </div>
  );
}
