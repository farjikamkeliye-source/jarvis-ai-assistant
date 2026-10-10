# Jarvis AI Assistant

This repository contains a starter full-stack project for a Jarvis-style AI assistant with:
- Desktop app (Electron + React-like vanilla JS shell)
- Mobile app (Expo / React Native)
- Python backend (FastAPI)
- AI chat API with tool-ready architecture
- Voice-ready structure for future expansion

## Project Structure

- `backend/` — FastAPI API server
- `desktop-app/` — desktop application shell
- `mobile-app/` — Expo mobile app
- `docker-compose.yml` — optional local orchestration

## Quick Start

### 1) Backend

```bash
cd backend
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

### 2) Desktop App

```bash
cd desktop-app
npm install
npm start
```

### 3) Mobile App

```bash
cd mobile-app
npm install
npx expo start
```

## Environment Variables

Create a `.env` file in `backend/` based on `.env.example`.

Example:

```env
OPENAI_API_KEY=your_key_here
MODEL_NAME=gpt-4o-mini
BACKEND_PORT=8000
```

The app will work even without an API key by falling back to a local mock response.

## Features Included

- AI chat endpoint
- Desktop launcher UI
- Mobile chat interface
- Tool-aware assistant service layer
- Local memory/context placeholders
- Easy extension for:
  - browser automation
  - file operations
  - desktop command execution
  - voice assistant features

## Notes

This is a production-ready starter architecture, not a full proprietary Jarvis clone. It gives you the foundation to extend with:
- system automation
- speech-to-text
- text-to-speech
- long-term memory
- integrations with GitHub, browser, files, and calendar

## License

MIT
