import React, { useState, useEffect } from 'react';
import AIResult from '../AIResult';
import { useNavigate } from 'react-router-dom';

/**
 * Home — simple AI symptom checker UI
 * Props:
 *  - navigate(pageName: 'home'|'doctors'|'appointment') optional
 */
export default function Home() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // load from localStorage
  useEffect(() => {
    try {
      const s = localStorage.getItem('home.symptoms');
      const r = localStorage.getItem('home.result');
      if (s) setInput(s);
      if (r) setResult(JSON.parse(r));
    } catch (e) {
      // ignore
    }
  }, []);

  function mockAISuggest(symptomsText) {
    // very simple keyword-based heuristic to simulate AI
    const s = symptomsText.toLowerCase();
    const map = [
      { keys: ['tooth', 'teeth', 'toothache'], specialty: 'Dentist' },
      { keys: ['rash', 'itch', 'skin'], specialty: 'Dermatologist' },
      { keys: ['eye', 'vision', 'blur'], specialty: 'Ophthalmologist' },
      { keys: ['stomach', 'nausea', 'abdomen', 'vomit'], specialty: 'Gastroenterologist' },
      { keys: ['child', 'pediatric', 'kid'], specialty: 'Pediatrician' },
      { keys: ['preg', 'pregnant', 'obgyn'], specialty: 'OB/GYN' },
      { keys: ['cough', 'fever', 'cold', 'sore throat'], specialty: 'General Physician' },
      { keys: ['back', 'joint', 'pain', 'sprain'], specialty: 'Orthopedist' }
    ];

    // score matches
    let best = { specialty: 'General Practitioner', score: 0, matchCount: 0 };
    for (const m of map) {
      let count = 0;
      for (const k of m.keys) if (s.includes(k)) count++;
      if (count > best.matchCount) best = { specialty: m.specialty, score: count, matchCount: count };
    }

    // build a fake doctor suggestion
    const doctorName = `${best.specialty.split(' ')[0]} Specialist`;
    const confidence = Math.min(0.95, 0.4 + (best.matchCount * 0.2));
    const notes = best.matchCount > 0 ? `Matched ${best.matchCount} symptom keyword(s).` : 'No clear specialty matched — a general physician is recommended.';

    return { doctorName, specialty: best.specialty, confidence, notes };
  }

  async function handleSuggest(e) {
    e && e.preventDefault();
    if (!input.trim()) {
      setResult(null);
      return;
    }
    setLoading(true);
    // simulate async AI call
    await new Promise(r => setTimeout(r, 500));
    const res = mockAISuggest(input);
    setResult(res);
    try {
      localStorage.setItem('home.symptoms', input);
      localStorage.setItem('home.result', JSON.stringify(res));
    } catch (e) {}
    setLoading(false);
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>AI Symptom Checker</h2>
      <form onSubmit={handleSuggest} className="home-form">
        <input
          aria-label="Enter your symptoms"
          placeholder="Enter your symptoms (e.g. cough, fever, rash)"
          value={input}
          onChange={e => setInput(e.target.value)}
          className="home-input"
        />
        <div className="home-actions">
          <button type="submit" className="btn-primary" disabled={loading}>{loading ? 'Thinking…' : 'Suggest Doctor'}</button>
          <button type="button" className="btn-ghost" onClick={() => { setInput(''); setResult(null); localStorage.removeItem('home.symptoms'); localStorage.removeItem('home.result'); }}>Clear</button>
        </div>
      </form>

      <div style={{ marginTop: 12 }}>
        <AIResult result={result} />
      </div>

      <div style={{ marginTop: 16, display: 'flex', gap: 8 }}>
        <button onClick={() => navigate('/doctors')} className="btn-link">Go to Doctors</button>
        <button onClick={() => navigate('/appointment')} className="btn-link">Make Appointment</button>
      </div>
    </div>
  );
}
