require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const flightRouter = require('./routes/flight');

const app = express();
const allowedOrigins = [
  'https://seat-recommender-one.vercel.app/'
  
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
