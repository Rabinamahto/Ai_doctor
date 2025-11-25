import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
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

    // In production, send to backend
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Get in touch with us.</p>
      </div>

      <div className="contact-content">
        <div className="contact-info-section">
          <h2>Get In Touch</h2>
          <p className="contact-intro">
            Have questions? Need support? Want to partner with us? Drop us a message and we'll
            get back to you as soon as possible.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div>
                <h4>Email</h4>
                <p>support@doctorai.com</p>
                <p className="secondary-email">partnerships@doctorai.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div>
                <h4>Phone</h4>
                <p>+91-1800-123-4567 (Toll Free)</p>
                <p>Available: Mon-Sat, 9AM - 6PM</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <h4>Address</h4>
                <p>Doctor AI Headquarters</p>
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
        </div>

        <div className="contact-form-section">
          {submitted ? (
            <div className="success-message-card">
              <div className="success-icon">✅</div>
              <h3>Message Sent!</h3>
              <p>Thank you for contacting us. We'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <h3>Send Us a Message</h3>
              
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

              <button type="submit" className="btn-submit-contact">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
