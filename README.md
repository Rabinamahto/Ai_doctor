# Project layout and running the app

This repository was reorganized: the React front-end now lives in `frontend/` and the Node/Express proxy lives in `backend/`.

Quick start

- Frontend (React + Tailwind):
	- cd frontend
	- npm install
	- npm start

- Backend (Express proxy to Gemini):
	- cd backend
	- npm install
	- cp .env.example .env
	- # edit .env and set GEMINI_API_KEY and GEMINI_ENDPOINT
	- npm run dev

Notes

- The root-level `src/` is kept for reference but the active front-end is under `frontend/`.
- To enable real Gemini responses, provide a valid `GEMINI_API_KEY` in `backend/.env`.
- If you want cleanup assistance (remove old `src/`), tell me and I will remove or archive it.

See `frontend/README.md` and `backend/README.md` for more details.
