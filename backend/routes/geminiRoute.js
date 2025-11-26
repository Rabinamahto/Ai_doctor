// Gemini route removed — AI assistant feature is no longer part of this project.
// This file remains as a placeholder to avoid runtime errors if referenced.
import express from 'express';
const router = express.Router();

router.post('/', (req, res) => {
  res.status(410).json({ error: 'AI Assistant feature removed from this project' });
});

export default router;
