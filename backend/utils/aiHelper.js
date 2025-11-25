// Simple symptom analyzer used by backend fallback
export function analyzeSymptoms(text) {
  const s = (text || '').toLowerCase();

  const conditions = [
    {
      keywords: ['fever', 'temperature', 'chills'],
      condition: 'Fever',
      causes: ['Viral infection', 'Bacterial infection', 'Flu', 'COVID-19'],
      tips: ['Rest and stay hydrated', 'Take paracetamol if needed', 'Monitor temperature'],
      whenToSeeDr: 'If fever persists for more than 3 days or exceeds 103°F',
      specialists: ['General Physician']
    },
    {
      keywords: ['cough', 'breathless', 'shortness of breath'],
      condition: 'Respiratory issue',
      causes: ['Common cold', 'Bronchitis', 'Asthma', 'COVID-19'],
      tips: ['Keep hydrated', 'Use steam inhalation', 'See a doctor if breathing worsens'],
      whenToSeeDr: 'If you have difficulty breathing or high fever',
      specialists: ['Pulmonologist', 'General Physician']
    },
    {
      keywords: ['headache', 'migraine'],
      condition: 'Headache / Migraine',
      causes: ['Tension', 'Dehydration', 'Eye strain', 'Migraine'],
      tips: ['Rest', 'Hydrate', 'Avoid bright screens'],
      whenToSeeDr: 'If headache is severe or sudden',
      specialists: ['General Physician', 'Neurologist']
    }
  ];

  let matches = [];
  for (const c of conditions) {
    let score = 0;
    for (const kw of c.keywords) if (s.includes(kw)) score++;
    if (score > 0) matches.push({ ...c, score });
  }

  matches.sort((a, b) => b.score - a.score);
  if (matches.length > 0) return matches[0];

  return {
    condition: 'General Health Concern',
    causes: ['Multiple possible causes'],
    tips: ['Stay hydrated', 'Rest', 'Seek medical attention if it worsens'],
    whenToSeeDr: 'If symptoms persist or you feel unwell',
    specialists: ['General Physician']
  };
}
