import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);
  const [activeTab, setActiveTab] = useState('upcoming');

  useEffect(() => {
    // Load appointments from localStorage
    const stored = JSON.parse(localStorage.getItem('appointments') || '[]');
    setAppointments(stored);
  }, []);

  const handleCancel = (id) => {
    if (window.confirm('Are you sure you want to cancel this appointment?')) {
      const updated = appointments.filter(apt => apt.id !== id);
      setAppointments(updated);
      localStorage.setItem('appointments', JSON.stringify(updated));
    }
  };

  const handleDownload = (appointment) => {
    const receipt = `APPOINTMENT CONFIRMATION\n========================\nDoctor: ${appointment.doctorName}\nSpecialty: ${appointment.specialty}\nDate: ${appointment.date}\nTime: ${appointment.time}\nPatient: ${appointment.name}\nAge: ${appointment.age}\nPhone: ${appointment.phone}\nType: ${appointment.consultationType === 'online' ? 'Online' : 'In-Person'}\nStatus: ${appointment.status}\n========================\nPlease arrive 10 minutes early.`;
    const blob = new Blob([receipt], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `appointment-${appointment.id}.txt`;
    a.click();
  };

  const upcomingAppointments = appointments.filter(apt => {
    const aptDate = new Date(apt.date);
    return aptDate >= new Date() && apt.status === 'confirmed';
  });

  const pastAppointments = appointments.filter(apt => {
    const aptDate = new Date(apt.date);
    return aptDate < new Date() || apt.status === 'cancelled';
  });

  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <h1>My Appointments</h1>
        <button onClick={() => navigate('/doctors')} className="btn-primary">
          + Book New Appointment
        </button>
      </div>

      <div className="dashboard-tabs">
        <button
          className={`tab ${activeTab === 'upcoming' ? 'active' : ''}`}
          onClick={() => setActiveTab('upcoming')}
        >
          Upcoming ({upcomingAppointments.length})
        </button>
        <button
          className={`tab ${activeTab === 'past' ? 'active' : ''}`}
          onClick={() => setActiveTab('past')}
        >
          Past ({pastAppointments.length})
        </button>
      </div>

      <div className="appointments-list">
        {activeTab === 'upcoming' && (
          <>
            {upcomingAppointments.length === 0 ? (
              <div className="empty-state">
                <p>📅 No upcoming appointments</p>
                <button onClick={() => navigate('/doctors')} className="btn-primary">
                  Book an Appointment
                </button>
              </div>
            ) : (
              upcomingAppointments.map(apt => (
                <div key={apt.id} className="appointment-card">
                  <div className="appointment-header">
                    <div className="doctor-info">
                      <div className="doctor-avatar-sm">{apt.doctorName.charAt(3)}</div>
                      <div>
                        <h3>{apt.doctorName}</h3>
                        <p className="specialty">{apt.specialty}</p>
                      </div>
                    </div>
                    <span className="status-badge confirmed">Confirmed</span>
                  </div>
                  
                  <div className="appointment-details">
                    <div className="detail-item">
                      <span className="label">📅 Date:</span>
                      <span className="value">{apt.date}</span>
                    </div>
                    <div className="detail-item">
                      <span className="label">⏰ Time:</span>
                      <span className="value">{apt.time}</span>
                    </div>
                    <div className="detail-item">
                      <span className="label">💻 Type:</span>
                      <span className="value">
                        {apt.consultationType === 'online' ? 'Online Consultation' : 'In-Person Visit'}
                      </span>
                    </div>
                    {apt.consultationType === 'online' && (
                      <div className="detail-item">
                        <span className="label">🔗 Link:</span>
                        <a href="#" className="value link">Join Meeting</a>
                      </div>
                    )}
                  </div>

                  <div className="appointment-actions">
                    <button onClick={() => handleDownload(apt)} className="btn-download">
                      📄 Download Slip
                    </button>
                    <button onClick={() => handleCancel(apt.id)} className="btn-cancel-apt">
                      ✕ Cancel
                    </button>
                  </div>
                </div>
              ))
            )}
          </>
        )}

        {activeTab === 'past' && (
          <>
            {pastAppointments.length === 0 ? (
              <div className="empty-state">
                <p>📋 No past appointments</p>
              </div>
            ) : (
              pastAppointments.map(apt => (
                <div key={apt.id} className="appointment-card past">
                  <div className="appointment-header">
                    <div className="doctor-info">
                      <div className="doctor-avatar-sm">{apt.doctorName.charAt(3)}</div>
                      <div>
                        <h3>{apt.doctorName}</h3>
                        <p className="specialty">{apt.specialty}</p>
                      </div>
                    </div>
                    <span className={`status-badge ${apt.status}`}>
                      {apt.status === 'cancelled' ? 'Cancelled' : 'Completed'}
                    </span>
                  </div>
                  
                  <div className="appointment-details">
                    <div className="detail-item">
                      <span className="label">📅 Date:</span>
                      <span className="value">{apt.date}</span>
                    </div>
                    <div className="detail-item">
                      <span className="label">⏰ Time:</span>
                      <span className="value">{apt.time}</span>
                    </div>
                  </div>

                  <div className="appointment-actions">
                    <button onClick={() => handleDownload(apt)} className="btn-download">
                      📄 Download Slip
                    </button>
                  </div>
                </div>
              ))
            )}
          </>
        )}
      </div>
    </div>
  );
}
