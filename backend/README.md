# Backend (Doctor App)

Small Express backend that serves doctor and appointment data used by the frontend. The AI assistant / Gemini proxy has been removed from this project. If you want to re-enable AI features, restore the `/routes/geminiRoute.js` and `utils/aiHelper.js` and set the proper environment variables.

Run:

```bash
cd backend
npm install
npm run dev
```

Available endpoints include `/api/doctors` and `/api/appointments` (see `routes/`).
