const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const path = require('path');

// middleware imports
const { errorHandler, notFound } = require('./middleware/errorMiddleware');
// db import
const db = require('./data/db');

// test db
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch((err) => console.log('Error: ' + err));

// Route imports
const agentRouter = require('./routes/agentRoutes');
const travellerRouter = require('./routes/travellerRoutes');
const bookingRouter = require('./routes/bookingRoutes');
const provinceRouter = require('./routes/provinceRoutes');
const countryRouter = require('./routes/countryRoutes');
const addonRouter = require('./routes/addonRoutes');
const booking_addonRouter = require('./routes/booking_addonRoutes');

const app = express();
app.use(express.json());

// routes
app.use('/api/agents', agentRouter);
app.use('/api/travellers', travellerRouter);
app.use('/api/bookings', bookingRouter);
app.use('/api/provinces', provinceRouter);
app.use('/api/countries', countryRouter);
app.use('/api/addons', addonRouter);
app.use('/api/booking_addons', booking_addonRouter);

// folder paths for production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('API is running!');
  });
}

// 404 and errorhandler middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const MODE = process.env.NODE_ENV;

app.listen(
  PORT,
  console.log(`Server is running in ${MODE} mode on port ${PORT}`.yellow.bold)
);
