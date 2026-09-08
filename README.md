# 🛫 Seat Recommender

Seat Recommender is a full-stack travel app designed to help passengers choose the best airplane window seat for scenic views based on flight route, sun position, and travel time. Built with Next.js on the frontend and Express.js on the backend, it gives a clean, modern experience for travelers who want to maximize sunrise, sunset, and daylight viewing during flights.

Built and maintained by Rohan.

## 🌟 Project Overview

This application lets users:

- enter departure and arrival airports
- select a flight date and time
- get a seat recommendation such as left or right side window seat
- see a flight path and sun-position based logic
- view a travel-friendly recommendation experience built around scenic view optimization

## ✨ Features

- Smart left/right window seat recommendation based on sun direction
- Airport search with airline/airport suggestions
- Flight path and route logic
- Sun angle and daylight evaluation
- Modern landing page experience with responsive UI
- Express backend with API endpoints
- Local airport dataset support for offline-ready lookups
- CORS and security middleware for API usage

## 🧩 Tech Stack

### Frontend
- Next.js
- React
- Axios
- Leaflet
- React Icons

### Backend
- Node.js
- Express.js
- SunCalc
- Node-cache
- Helmet
- CORS

## 📁 Repository Structure

```bash
Seat-Recommender/
├── backend/
│   ├── src/
│   │   ├── index.js
│   │   ├── routes/
│   │   │   └── flight.js
│   │   └── services/
│   │       ├── airportDataset.js
│   │       ├── airportService.js
│   │       ├── flightPathService.js
│   │       └── sunService.js
│   ├── .env.example
│   ├── package.json
│   └── serverless.yml
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   ├── .env.example
│   ├── next.config.js
│   ├── package.json
│   └── vercel.json
├── package.json
├── README.md
└── .gitignore
```

## 🚀 Local Setup

### Prerequisites
- Node.js 18+
- npm

### 1. Clone the project
```bash
git clone https://github.com/Rohan692023/Seat-Recommender.git
cd Seat-Recommender
```

### 2. Install dependencies
```bash
npm install
cd backend && npm install
cd ../frontend && npm install
```

### 3. Create environment files

Backend:
```bash
cd ../backend
copy .env.example .env
```

Frontend:
```bash
cd ../frontend
copy .env.example .env.local
```

### 4. Add environment variables

Backend `.env`:
```env
AIRPORT_API_KEY=your_aviationstack_api_key
AIRPORT_API_URL=https://api.aviationstack.com/v1
PORT=4000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

Frontend `.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:4000/api
NEXT_PUBLIC_PORT=3000
```

### 5. Run app locally
From root:
```bash
npm run dev
```

Frontend will run on:
```text
http://localhost:3000
```

Backend API will run on:
```text
http://localhost:4000/api
```

## 🔧 API Endpoints

### GET /api/flight/search
Search airports by query value.

Example:
```bash
http://localhost:4000/api/flight/search?q=JFK&limit=6
```

### POST /api/flight
Returns the best scenic seat recommendation.

Request body:
```json
{
  "departure": "JFK",
  "arrival": "LAX",
  "datetime": "2026-09-08T10:30:00"
}
```

Response:
```json
{
  "recommendation": "left",
  "reason": "Left side faces the sun for spectacular sunrise/sunset views",
  "confidence": "high",
  "flightInfo": {
    "distance": 3974.4,
    "bearing": 300.2,
    "duration": 265
  },
  "sunInfo": {
    "azimuth": 145.2,
    "altitude": 18.8,
    "isDaytime": true
  },
  "path": [],
  "sunPositions": []
}
```

## ☀️ Deployment Guide

### Frontend Deployment on Vercel
1. Push code to GitHub
2. Open Vercel
3. Import project
4. Select repository root as `frontend`
5. Framework should auto-detect as Next.js
6. Add environment variable:
```env
NEXT_PUBLIC_API_URL=https://your-render-backend-url.onrender.com/api
```
7. Deploy

### Backend Deployment on Render
1. Open Render dashboard
2. Create a new Web Service
3. Connect GitHub repository
4. Set Root Directory to `backend`
5. Build Command:
```bash
npm install
```
6. Start Command:
```bash
npm start
```
7. Add environment variables:
```env
PORT=10000
NODE_ENV=production
AIRPORT_API_KEY=your_aviationstack_api_key
AIRPORT_API_URL=https://api.aviationstack.com/v1
FRONTEND_URL=https://your-vercel-frontend-url
```
8. Deploy

## 🔐 Required Environment Variables

### Backend
```env
AIRPORT_API_KEY=your_aviationstack_api_key
AIRPORT_API_URL=https://api.aviationstack.com/v1
PORT=4000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

### Frontend
```env
NEXT_PUBLIC_API_URL=http://localhost:4000/api
NEXT_PUBLIC_PORT=3000
```

## 📝 Notes

- Use `.env.example` as a template
- Do not commit actual `.env` files to GitHub
- Keep the AviationStack key private
- For production, use Vercel for frontend and Render for backend

## 👤 Author

Rohan

## 📄 License

This project is open for educational and portfolio use.

---

Seat Recommender helps travelers make smarter flight decisions by turning sunlight, timing, and route direction into a practical seating recommendation.