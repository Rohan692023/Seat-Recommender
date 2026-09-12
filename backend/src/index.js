require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const flightRouter = require('./routes/flight');

const app = express();
const allowedOrigins = [
  'http://localhost:3000',
  'https://seatfrontend-h6jvpz2up-rohan692023s-projects.vercel.app',
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(express.json());
app.use(helmet());
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
      return;
    }

    callback(new Error('Not allowed by CORS'));
  },
  methods: ['POST', 'GET', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
}));
app.use('/api/flight', flightRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
