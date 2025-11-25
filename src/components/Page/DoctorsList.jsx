import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { doctors as allDoctors, specialties } from '../../data/doctorsData';

export default function DoctorsList() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  const [filters, setFilters] = useState({
    specialty: searchParams.get('specialty') || '',
    location: '',
    minFees: '',
    maxFees: '',
    minExperience: '',
    search: searchParams.get('search') || ''
  });

  const [doctors, setDoctors] = useState(allDoctors);

  useEffect(() => {
    let filtered = [...allDoctors];

    // Apply filters
    if (filters.specialty) {
      filtered = filtered.filter(d => d.specialty === filters.specialty);
    }
    if (filters.location) {
      filtered = filtered.filter(d => 
        d.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }
    if (filters.minFees) {
      filtered = filtered.filter(d => d.fees >= parseInt(filters.minFees));
    }
    if (filters.maxFees) {
      filtered = filtered.filter(d => d.fees <= parseInt(filters.maxFees));
    }
    if (filters.minExperience) {
      filtered = filtered.filter(d => d.experience >= parseInt(filters.minExperience));
    }
    if (filters.search) {
      const query = filters.search.toLowerCase();
      filtered = filtered.filter(d =>
        d.name.toLowerCase().includes(query) ||
        d.specialty.toLowerCase().includes(query) ||
        d.location.toLowerCase().includes(query)
      );
    }

    setDoctors(filtered);
  }, [filters]);

  const clearFilters = () => {
    setFilters({
      specialty: '',
      location: '',
      minFees: '',
      maxFees: '',
      minExperience: '',
      search: ''
    });
  };

  return (
    <div className="doctors-page">
      <div className="page-header">
        <h1>Find Your Doctor</h1>
        <p>Search and filter from our list of verified doctors</p>
      </div>

      <div className="doctors-content">
        {/* Filters Sidebar */}
        <aside className="filters-sidebar">
          <div className="filters-header">
            <h3>Filters</h3>
            <button onClick={clearFilters} className="clear-btn">Clear All</button>
          </div>

          <div className="filter-group">
            <label>Specialty</label>
            <select
              value={filters.specialty}
              onChange={(e) => setFilters({ ...filters, specialty: e.target.value })}
            >
              <option value="">All Specialties</option>
              {specialties.map((s, i) => (
                <option key={i} value={s.name}>{s.name}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label>Location</label>
            <input
              type="text"
              placeholder="Enter city..."
              value={filters.location}
              onChange={(e) => setFilters({ ...filters, location: e.target.value })}
            />
          </div>

          <div className="filter-group">
            <label>Consultation Fees</label>
            <div className="fees-range">
              <input
                type="number"
                placeholder="Min"
                value={filters.minFees}
                onChange={(e) => setFilters({ ...filters, minFees: e.target.value })}
              />
              <span>to</span>
              <input
                type="number"
                placeholder="Max"
                value={filters.maxFees}
                onChange={(e) => setFilters({ ...filters, maxFees: e.target.value })}
              />
            </div>
          </div>

          <div className="filter-group">
            <label>Min. Experience (years)</label>
            <input
              type="number"
              placeholder="e.g., 5"
              value={filters.minExperience}
              onChange={(e) => setFilters({ ...filters, minExperience: e.target.value })}
            />
          </div>
        </aside>

        {/* Doctors List */}
        <div className="doctors-list">
          <div className="results-header">
            <p className="results-count">
              {doctors.length} {doctors.length === 1 ? 'doctor' : 'doctors'} found
            </p>
          </div>

          {doctors.length === 0 ? (
            <div className="no-results">
              <p>😔 No doctors found matching your criteria</p>
              <button onClick={clearFilters} className="btn-primary">Clear Filters</button>
            </div>
          ) : (
            <div className="doctors-grid-list">
              {doctors.map((doctor) => (
                <div key={doctor.id} className="doctor-card-full">
                  <div className="doctor-card-content">
                    <div className="doctor-avatar-large">
                      {doctor.name.charAt(3)}
                    </div>
                    <div className="doctor-details">
                      <h3 className="doctor-name">{doctor.name}</h3>
                      <p className="doctor-specialty">{doctor.specialty}</p>
                      <p className="doctor-qualification">{doctor.qualifications}</p>
                      <div className="doctor-meta-row">
                        <span>📍 {doctor.location}</span>
                        <span>💼 {doctor.experience} years</span>
                        <span>⭐ {doctor.rating} ({doctor.reviews})</span>
                      </div>
                      <p className="doctor-fees">₹{doctor.fees} consultation fee</p>
                    </div>
                  </div>
                  <button
                    onClick={() => navigate(`/doctor/${doctor.id}`)}
                    className="btn-view-profile"
                  >
                    View Profile & Book
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
