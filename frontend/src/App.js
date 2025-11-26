import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/NavbarNew';

// Pages
import NewHome from './components/Page/NewHome';
import DoctorsList from './components/Page/DoctorsList';
import DoctorDetails from './components/Page/DoctorDetails';
import BookAppointment from './components/Page/BookAppointment';
import Dashboard from './components/Page/Dashboard';
import LoginPage from './components/Page/LoginPage';
import SignupPage from './components/Page/SignupPage';
import AboutPage from './components/Page/AboutPage';
import ContactPage from './components/Page/ContactPage';
import EmergencyPage from './components/Page/EmergencyPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <main className="App-main">
          <Routes>
            <Route path="/" element={<NewHome />} />
            {/* AI Assistant removed */}
            <Route path="/doctors" element={<DoctorsList />} />
            <Route path="/doctor/:id" element={<DoctorDetails />} />
            <Route path="/appointment" element={<BookAppointment />} />
            <Route path="/book-appointment/:doctorId" element={<BookAppointment />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/emergency" element={<EmergencyPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
