import React, { useState } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { doctors } from '../../data/doctorsData';

export default function BookAppointment() {
  const { doctorId } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  const doctor = doctorId ? doctors.find(d => d.id === parseInt(doctorId)) : null;
  
  const [formData, setFormData] = useState({
    doctorId: doctorId || '',
    date: searchParams.get('date') || '',
    time: searchParams.get('time') || '',
    consultationType: 'offline',
    name: '',
    age: '',
    phone: '',
    problem: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.age || !formData.phone || !formData.date || !formData.time) {
      alert('Please fill all required fields');
      return;
    }

    // Save to localStorage (simulating backend)
    const appointments = JSON.parse(localStorage.getItem('appointments') || '[]');
    const newAppointment = {
      id: Date.now(),
      ...formData,
      doctorName: doctor ? doctor.name : 'Doctor',
      specialty: doctor ? doctor.specialty : '',
      status: 'confirmed',
      createdAt: new Date().toISOString()
    };
    appointments.push(newAppointment);
    localStorage.setItem('appointments', JSON.stringify(appointments));

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="booking-success-page">
        <div className="success-card">
          <div className="success-icon">✅</div>
          <h1>Appointment Booked Successfully!</h1>
          <p className="success-message">
            Your appointment has been confirmed. You will receive a confirmation message shortly.
          </p>
          
          <div className="appointment-summary">
            <h3>Appointment Details</h3>
            {doctor && (
              <>
                <p><strong>Doctor:</strong> {doctor.name}</p>
                <p><strong>Specialty:</strong> {doctor.specialty}</p>
              </>
            )}
            <p><strong>Date:</strong> {formData.date}</p>
            <p><strong>Time:</strong> {formData.time}</p>
            <p><strong>Type:</strong> {formData.consultationType === 'online' ? 'Online Consultation' : 'In-Person Visit'}</p>
            {formData.consultationType === 'offline' && doctor && (
              <p><strong>Location:</strong> {doctor.clinicAddress}</p>
            )}
          </div>

          <div className="success-actions">
            <button onClick={() => navigate('/dashboard')} className="btn-primary">
              View My Appointments
            </button>
            <button onClick={() => navigate('/')} className="btn-secondary">
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="book-appointment-page">
      <div className="booking-container">
        <h1>Book Your Appointment</h1>
        {doctor && (
          <div className="selected-doctor-info">
            <div className="doctor-avatar-md">{doctor.name.charAt(3)}</div>
            <div>
              <h3>{doctor.name}</h3>
              <p>{doctor.specialty}</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="booking-form">
          {/* Doctor Selection (if not pre-selected) */}
          {!doctor && (
            <div className="form-group">
              <label>Select Doctor *</label>
              <select
                name="doctorId"
                value={formData.doctorId}
                onChange={handleChange}
                required
              >
                <option value="">Choose a doctor</option>
                {doctors.map(d => (
                  <option key={d.id} value={d.id}>
                    {d.name} - {d.specialty}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Consultation Type */}
          <div className="form-group">
            <label>Consultation Type *</label>
            <div className="radio-group">
              <label className="radio-option">
                <input
                  type="radio"
                  name="consultationType"
                  value="online"
                  checked={formData.consultationType === 'online'}
                  onChange={handleChange}
                />
                <span>💻 Online Consultation</span>
              </label>
              <label className="radio-option">
                <input
                  type="radio"
                  name="consultationType"
                  value="offline"
                  checked={formData.consultationType === 'offline'}
                  onChange={handleChange}
                />
                <span>🏥 In-Person Visit</span>
              </label>
            </div>
          </div>

          {/* Date & Time */}
          <div className="form-row">
            <div className="form-group">
              <label>Date *</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                required
              />
            </div>
            <div className="form-group">
              <label>Time *</label>
              <select name="time" value={formData.time} onChange={handleChange} required>
                <option value="">Select time</option>
                {doctor ? doctor.timeSlots.map((slot, i) => (
                  <option key={i} value={slot}>{slot}</option>
                )) : (
                  <>
                    <option value="09:00 AM">09:00 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="02:00 PM">02:00 PM</option>
                    <option value="03:00 PM">03:00 PM</option>
                    <option value="04:00 PM">04:00 PM</option>
                  </>
                )}
              </select>
            </div>
          </div>

          {/* Patient Details */}
          <div className="form-group">
            <label>Full Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Age *</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Age"
                min="1"
                max="120"
                required
              />
            </div>
            <div className="form-group">
              <label>Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91-XXXXXXXXXX"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Problem Description</label>
            <textarea
              name="problem"
              value={formData.problem}
              onChange={handleChange}
              placeholder="Briefly describe your health concern..."
              rows="4"
            ></textarea>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-submit">
              ✓ Confirm Appointment
            </button>
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="btn-cancel"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
