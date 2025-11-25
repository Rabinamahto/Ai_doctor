import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Appointment() {
  const [name, setName] = useState('');
  const [doctor, setDoctor] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="page-wrap">
      <h2>Make an Appointment</h2>
      {submitted ? (
        <div className="card">
          <p>Appointment requested for <strong>{name}</strong> with <strong>{doctor || 'a doctor'}</strong>.</p>
          <div style={{ marginTop: 8 }}>
            <Link to="/" className="btn-link">Back to Home</Link>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="form-card">
          <label>Your name</label>
          <input value={name} onChange={e => setName(e.target.value)} className="home-input" />

          <label>Preferred Doctor (optional)</label>
          <input value={doctor} onChange={e => setDoctor(e.target.value)} className="home-input" />

          <div style={{ marginTop: 12 }}>
            <button type="submit" className="btn-primary">Request Appointment</button>
            <Link to="/" className="btn-ghost" style={{ marginLeft: 8 }}>Cancel</Link>
          </div>
        </form>
      )}
    </div>
  );
}
