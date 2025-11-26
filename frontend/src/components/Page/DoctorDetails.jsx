import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doctors } from '../../data/doctorsData';
import generateAvatar from '../../utils/avatar';

export default function DoctorDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const doctor = doctors.find(d => d.id === parseInt(id));

  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  if (!doctor) {
    return (
      <div className="page-wrap">
        <h2>Doctor not found</h2>
        <button onClick={() => navigate('/doctors')} className="btn-primary">
          Back to Doctors
        </button>
      </div>
    );
  }

  const handleBookNow = () => {
    if (selectedDate && selectedTime) {
      navigate(`/book-appointment/${doctor.id}?date=${selectedDate}&time=${selectedTime}`);
    } else {
      alert('Please select date and time');
    }
  };

  const reviews = [
    { id: 1, name: 'Amit Sharma', rating: 5, text: 'Excellent doctor, very patient and knowledgeable.', date: '2 weeks ago' }
  ];

  return (
    <div className="doctor-details-page">
      {/* Doctor Header */}
      <div className="doctor-header hero">
        <div className="doctor-header-content">
          <div className="doctor-photo">
            <div className="doctor-avatar-xl">
              <img src={doctor.photo || generateAvatar(doctor.name, 120)} alt={doctor.name} />
            </div>
          </div>
          <div className="doctor-header-info">
            <h1 className="doctor-name">{doctor.name}</h1>
            <div className="meta-row">
              <span className="specialty-badge">{doctor.specialty}</span>
              <span className="muted small">{doctor.qualifications}</span>
            </div>
            <div className="rating-section">
              <div className="stars">{'★'.repeat(Math.round(doctor.rating))}</div>
              <div className="rating-small muted">{doctor.rating} • {doctor.reviews} reviews</div>
            </div>
            <div className="quick-info muted">
              <span>💼 {doctor.experience} yrs</span>
              <span>📍 {doctor.location}</span>
              <span>💰 ₹{doctor.fees}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="doctor-details-content">
        {/* Left Column */}
        <div className="details-main">
          {/* About */}
          <section className="details-section">
            <h2>About</h2>
            <p>{doctor.about}</p>
          </section>

          {/* Clinic Address */}
          <section className="details-section">
            <h2>Clinic Address</h2>
            <p>📍 {doctor.clinicAddress}</p>
            <p>📞 {doctor.phone}</p>
            <p>📧 {doctor.email}</p>
          </section>

          {/* Reviews */}
          <section className="details-section">
            <h2>Patient Reviews</h2>
            <div className="reviews-list">
              {reviews.map(review => (
                <div key={review.id} className="review-card">
                  <div className="review-header">
                    <strong>{review.name}</strong>
                    <span className="review-date">{review.date}</span>
                  </div>
                  <div className="review-rating">{'⭐'.repeat(review.rating)}</div>
                  <p className="review-text">{review.text}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column - Booking */}
        <aside className="booking-sidebar">
          <div className="booking-card">
            <div className="booking-card-head">
              <h3>Book Appointment</h3>
              <div className="fees">₹{doctor.fees}</div>
            </div>

            <div className="booking-field">
              <label>Available Days</label>
              <div className="days-chips">
                {doctor.availability.map((day, idx) => (
                  <span key={idx} className="day-chip">{day}</span>
                ))}
              </div>
            </div>

            <div className="booking-field">
              <label>Select Date</label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
              />
            </div>

            <div className="booking-field">
              <label>Select Time Slot</label>
              <div className="time-slots">
                {doctor.timeSlots.map((slot, idx) => (
                  <button
                    key={idx}
                    className={`time-slot ${selectedTime === slot ? 'selected' : ''}`}
                    onClick={() => setSelectedTime(slot)}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            <div className="booking-actions">
              <button
                onClick={handleBookNow}
                className="btn-cta primary full-width"
                disabled={!selectedDate || !selectedTime}
              >
                📅 Book Now
              </button>
              <button onClick={() => navigate('/doctors')} className="btn-cta secondary full-width">
                ← Back to Doctors
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
