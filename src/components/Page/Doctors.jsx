import React from 'react';
import { Link } from 'react-router-dom';

export default function Doctors() {
  const sample = [
    { id: 'd1', name: 'Dr. A Kumar', specialty: 'General Physician', rating: 4.5 },
    { id: 'd2', name: 'Dr. S Mehta', specialty: 'Dermatologist', rating: 4.7 },
    { id: 'd3', name: 'Dr. R Das', specialty: 'Dentist', rating: 4.3 }
  ];

  return (
    <div className="page-wrap">
      <h2>Doctors</h2>
      <p className="muted">Available doctors (sample)</p>
      <div className="doctors-grid">
        {sample.map(d => (
          <div key={d.id} className="doctor-card">
            <div className="doc-avatar">{d.name.split(' ').map(s=>s[0]).slice(0,2).join('')}</div>
            <div>
              <div className="doc-name">{d.name}</div>
              <div className="doc-specialty">{d.specialty}</div>
              <div className="doc-meta">⭐ {d.rating}</div>
            </div>
            <div className="doc-actions">
              <Link to="/appointment" className="btn-sm">Book</Link>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 12 }}>
        <Link to="/" className="btn-link">Back to Home</Link>
      </div>
    </div>
  );
}
