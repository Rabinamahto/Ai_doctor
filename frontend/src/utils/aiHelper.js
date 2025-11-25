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
