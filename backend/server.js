const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');

// middleware imports
const { errorHandler, notFound } = require('./middleware/errorMiddleware');
// db import
const db = require('./data/db');

// test db
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch((err) => console.log('Error: ' + err));

// Route imports
const { agentRouter } = require('./routes/agentRoutes');
const { travellerRouter } = require('./routes/travellerRoutes');

const app = express();
app.use(express.json());

// routes
app.use('/api/agents', agentRouter);
app.use('/api/travellers', travellerRouter);

// 404 and errorhandler middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const MODE = process.env.NODE_ENV;

app.listen(
  PORT,
  console.log(`Server is running in ${MODE} mode on port ${PORT}`.yellow.bold)
);
