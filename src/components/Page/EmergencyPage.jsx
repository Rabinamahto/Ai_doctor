import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function EmergencyPage() {
  const navigate = useNavigate();

  const emergencyContacts = [
    { name: 'Ambulance', number: '108', icon: '🚑', desc: 'Emergency medical transport' },
    { name: 'Police', number: '100', icon: '🚓', desc: 'Law enforcement emergency' },
    { name: 'Fire Brigade', number: '101', icon: '🚒', desc: 'Fire and rescue services' },
    { name: 'Disaster Management', number: '108', icon: '⚠️', desc: 'Natural disaster response' }
  ];

  const nearbyHospitals = [
    { name: 'AIIMS Delhi', distance: '2.3 km', phone: '+91-11-2658-8500' },
    { name: 'Max Hospital', distance: '3.7 km', phone: '+91-11-2651-5050' },
    { name: 'Fortis Hospital', distance: '4.1 km', phone: '+91-11-4277-6222' }
  ];

  return (
    <div className="emergency-page">
      <div className="emergency-header urgent">
        <h1>🚨 Emergency Services</h1>
        <p className="urgent-text">For life-threatening emergencies, call 108 immediately</p>
      </div>

      <div className="emergency-content">
        <section className="emergency-section">
          <h2>Emergency Hotlines</h2>
          <div className="emergency-contacts">
            {emergencyContacts.map((contact, idx) => (
              <div key={idx} className="emergency-card">
                <div className="emergency-icon">{contact.icon}</div>
                <h3>{contact.name}</h3>
                <p className="emergency-desc">{contact.desc}</p>
                <a href={`tel:${contact.number}`} className="emergency-number">
                  📞 {contact.number}
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="emergency-section">
          <h2>Nearby Hospitals</h2>
          <div className="hospitals-list">
            {nearbyHospitals.map((hospital, idx) => (
              <div key={idx} className="hospital-card">
                <div className="hospital-info">
                  <h3>🏥 {hospital.name}</h3>
                  <p>📍 {hospital.distance} away</p>
                  <p>📞 {hospital.phone}</p>
                </div>
                <div className="hospital-actions">
                  <a href={`tel:${hospital.phone}`} className="btn-call">Call Now</a>
                  <button className="btn-directions">Get Directions</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="emergency-section">
          <h2>What to Do in an Emergency</h2>
          <div className="emergency-steps">
            <div className="step">
              <span className="step-number">1</span>
              <div>
                <h4>Stay Calm</h4>
                <p>Take deep breaths and assess the situation</p>
              </div>
            </div>
            <div className="step">
              <span className="step-number">2</span>
              <div>
                <h4>Call for Help</h4>
                <p>Dial 108 for ambulance or appropriate emergency number</p>
              </div>
            </div>
            <div className="step">
              <span className="step-number">3</span>
              <div>
                <h4>Provide Information</h4>
                <p>Clearly state your location and nature of emergency</p>
              </div>
            </div>
            <div className="step">
              <span className="step-number">4</span>
              <div>
                <h4>Follow Instructions</h4>
                <p>Listen carefully to the operator's guidance</p>
              </div>
            </div>
          </div>
        </section>

        <section className="emergency-section non-urgent">
          <h3>Non-Emergency Medical Help</h3>
          <p>For non-life-threatening issues, consult with our doctors:</p>
          <div className="non-emergency-actions">
            <button onClick={() => navigate('/ai-assistant')} className="btn-ai-help">
              🤖 AI Health Assistant
            </button>
            <button onClick={() => navigate('/doctors')} className="btn-book-doctor">
              👨‍⚕️ Book a Doctor
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
