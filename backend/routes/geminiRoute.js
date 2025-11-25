import express from 'express';
import { analyzeSymptoms } from '../utils/aiHelper.js';

const router = express.Router();

// POST /api/gemini
// body: { prompt: string }
router.post('/', async (req, res) => {
  try {
    const { prompt } = req.body || {};
    if (!prompt) return res.status(400).json({ error: 'Missing prompt' });

    // Currently we use a local analyzer as a fallback/default.
    // If you later add a real Gemini/OpenAI integration, replace this block.
    const analysis = analyzeSymptoms(prompt);
    return res.json({ analysis });
  } catch (err) {
    console.error('Error in /api/gemini:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
