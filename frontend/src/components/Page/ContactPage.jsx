import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill all fields');
      return;
    }

    // Simulate sending; in a real app we'd POST to backend
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Get in touch and we'll respond quickly.</p>
      </div>

      <div className="contact-content">
        <aside className="contact-info-card">
          <h2>Get In Touch</h2>
          <p className="contact-intro">Have questions, feedback or partnership ideas? Drop us a message and we'll get back to you.</p>

          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div>
                <h4>Email</h4>
                <p>support@hellodoctor.com</p>
                <p className="secondary-email">partnerships@hellodoctor.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div>
                <h4>Phone</h4>
                <p>+91-1800-123-4567 (Toll Free)</p>
                <p>Mon–Sat, 9AM–6PM</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <h4>Address</h4>
                <p>Hello Doctor Headquarters</p>
                <p>Cyber City, Gurugram, Haryana, India</p>
              </div>
            </div>
          </div>

          <div className="social-links">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#" className="social-icon">📘 Facebook</a>
              <a href="#" className="social-icon">🐦 Twitter</a>
              <a href="#" className="social-icon">📷 Instagram</a>
              <a href="#" className="social-icon">💼 LinkedIn</a>
            </div>
          </div>
        </aside>

        <section className="contact-form-card">
          {submitted ? (
            <div className="success-message-card">
              <div className="success-icon">✅</div>
              <h3>Message Sent!</h3>
              <p>Thanks — we'll respond to your message within 1–2 business days.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <h3>Send Us a Message</h3>

              <div className="form-row">
                <div className="form-group">
                  <label>Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Your Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help you..."
                  rows="6"
                  required
                ></textarea>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button type="submit" className="btn-submit-contact">
                  Send Message
                </button>
              </div>
            </form>
          )}
        </section>
      </div>
    </div>
  );
}
