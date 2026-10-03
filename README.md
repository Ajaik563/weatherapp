# Weather App

A full-stack weather application built with Express.js (Node.js) on the backend and React + Vite on the frontend.

## Project Structure

```
weather/
├── backend/           # Express server & API integrations
├── weather frontend/  # React + Vite frontend application
└── .gitignore         # Git ignore rules
```

## Getting Started

### 1. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory (see `.env.example`):
```env
PORT=5000
WEATHER_API_KEY=your_openweather_api_key
```

Run backend server:
```bash
npm start
# or node server.js
```

### 2. Frontend Setup

```bash
cd "weather frontend"
npm install
npm run dev
```
