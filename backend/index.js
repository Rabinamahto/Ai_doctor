const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5001;

// Simple proxy route to forward prompt to Gemini API
app.post('/api/gemini', async (req, res) => {
  const { prompt } = req.body;
  if (!prompt) return res.status(400).json({ error: 'prompt is required' });

  const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
  const GEMINI_ENDPOINT = process.env.GEMINI_ENDPOINT || 'https://api.example.com/gemini/v1/generate';

  if (!GEMINI_API_KEY) {
    return res.status(500).json({ error: 'GEMINI_API_KEY not configured on server' });
  }

  try {
    const response = await axios.post(
      GEMINI_ENDPOINT,
      { prompt },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${GEMINI_API_KEY}`
        },
        timeout: 120000
      }
    );

    return res.json(response.data);
  } catch (err) {
    console.error('Gemini proxy error:', err.message || err);
    if (err.response) {
      return res.status(err.response.status).json({ error: err.response.data || err.response.statusText });
    }
    return res.status(500).json({ error: 'Failed to contact Gemini API' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
});
