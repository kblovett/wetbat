const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');

const { errorHandler, notFound } = require('./middleware/errorMiddleware');
const db = require('./models');

// Route imports
const { agentRouter } = require('./routes/agentRoutes');

const app = express();
app.use(express.json());

// routes
app.use('/api/agents', agentRouter);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const MODE = process.env.NODE_ENV;

app.listen(
  PORT,
  console.log(`Server is running in ${MODE} mode on port ${PORT}`.yellow.bold)
);
