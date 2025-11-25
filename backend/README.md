# Doctor AI Backend

Small Express backend that proxies requests to the Gemini API. Copy `.env.example` to `.env` and set `GEMINI_API_KEY` and optionally `GEMINI_ENDPOINT`.

Run:

```bash
cd backend
npm install
npm run dev
```

The server exposes POST /api/gemini { prompt } which forwards to configured Gemini endpoint.
