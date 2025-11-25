// AI symptom checker with enhanced responses
export function analyzeSymptoms(symptomsText) {
  const s = symptomsText.toLowerCase();
  
  const conditions = [
    {
      keywords: ['fever', 'temperature', 'hot', 'chills'],
      condition: 'Fever',
      causes: ['Viral infection', 'Bacterial infection', 'Flu', 'COVID-19'],
      tips: ['Rest and stay hydrated', 'Take paracetamol if needed', 'Monitor temperature', 'Avoid cold drinks'],
      whenToSeeDr: 'If fever persists for more than 3 days or exceeds 103°F',
      specialists: ['General Physician', 'Internal Medicine']
    },
    {
      keywords: ['headache', 'head pain', 'migraine'],
      condition: 'Headache',
      causes: ['Tension', 'Migraine', 'Dehydration', 'Lack of sleep', 'Eye strain'],
      tips: ['Rest in a dark room', 'Stay hydrated', 'Apply cold compress', 'Avoid screens'],
      whenToSeeDr: 'If headache is severe, sudden, or accompanied by vision problems',
      specialists: ['General Physician', 'Neurologist']
    },
    {
      keywords: ['cough', 'coughing'],
      condition: 'Cough',
      causes: ['Common cold', 'Allergies', 'Bronchitis', 'Asthma'],
      tips: ['Drink warm water', 'Use honey', 'Avoid cold foods', 'Steam inhalation'],
      whenToSeeDr: 'If cough persists for more than 2 weeks or has blood',
      specialists: ['General Physician', 'Pulmonologist']
    },
    {
      keywords: ['stomach', 'pain', 'abdomen', 'belly', 'cramp'],
      condition: 'Stomach Pain',
      causes: ['Indigestion', 'Gas', 'Food poisoning', 'Gastritis', 'Ulcer'],
      tips: ['Eat light food', 'Avoid spicy foods', 'Drink warm water', 'Rest'],
      whenToSeeDr: 'If pain is severe, persists, or accompanied by vomiting/blood',
      specialists: ['General Physician', 'Gastroenterologist']
    },
    {
      keywords: ['chest pain', 'chest', 'heart'],
      condition: 'Chest Pain',
      causes: ['Muscle strain', 'Acidity', 'Anxiety', 'Heart issues'],
      tips: ['Rest immediately', 'Avoid physical exertion', 'Sit upright'],
      whenToSeeDr: '⚠️ Seek immediate medical attention - this could be serious',
      specialists: ['Cardiologist', 'Emergency Medicine'],
      urgent: true
    },
    {
      keywords: ['skin', 'rash', 'itch', 'allergy'],
      condition: 'Skin Issue',
      causes: ['Allergic reaction', 'Eczema', 'Fungal infection', 'Dry skin'],
      tips: ['Keep area clean', 'Apply moisturizer', 'Avoid scratching', 'Use cold compress'],
      whenToSeeDr: 'If rash spreads, is painful, or shows signs of infection',
      specialists: ['Dermatologist']
    },
    {
      keywords: ['tooth', 'teeth', 'dental', 'gum'],
      condition: 'Dental Problem',
      causes: ['Cavity', 'Gum disease', 'Infection', 'Tooth decay'],
      tips: ['Rinse with warm salt water', 'Avoid hard foods', 'Maintain oral hygiene'],
      whenToSeeDr: 'If pain is severe or there is swelling',
      specialists: ['Dentist']
    },
    {
      keywords: ['anxiety', 'stress', 'worry', 'panic', 'depressed', 'sad'],
      condition: 'Mental Health Concern',
      causes: ['Stress', 'Anxiety disorder', 'Depression', 'Work pressure'],
      tips: ['Practice deep breathing', 'Talk to someone', 'Exercise regularly', 'Get enough sleep'],
      whenToSeeDr: 'If feelings persist or affect daily life',
      specialists: ['Psychiatrist', 'Psychologist']
    },
    {
      keywords: ['back pain', 'back', 'spine'],
      condition: 'Back Pain',
      causes: ['Muscle strain', 'Poor posture', 'Herniated disc', 'Arthritis'],
      tips: ['Rest but stay active', 'Apply heat/ice', 'Maintain good posture', 'Gentle stretching'],
      whenToSeeDr: 'If pain radiates to legs, or there is numbness',
      specialists: ['Orthopedic', 'Physiotherapist']
    }
  ];

  // Find matching conditions
  let matches = [];
  for (const cond of conditions) {
    let score = 0;
    for (const kw of cond.keywords) {
      if (s.includes(kw)) score++;
    }
    if (score > 0) {
      matches.push({ ...cond, score });
    }
  }

  // Sort by score
  matches.sort((a, b) => b.score - a.score);

  // Return top match or default
  if (matches.length > 0) {
    return matches[0];
  }

  return {
    condition: 'General Health Concern',
    causes: ['Various factors'],
    tips: ['Stay hydrated', 'Get adequate rest', 'Maintain a healthy diet', 'Exercise regularly'],
    whenToSeeDr: 'If symptoms persist or worsen',
    specialists: ['General Physician']
  };
}
