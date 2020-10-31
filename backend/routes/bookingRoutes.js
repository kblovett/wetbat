const express = require('express');

// controller imports
const {
  getBookings,
  getBookingById,
} = require('../controllers/bookingController');

// middleware imports
const { protect } = require('../middleware/authMiddleware.js');

const bookingRouter = express.Router();

bookingRouter.route('/').get(protect, getBookings);
bookingRouter.route('/:id').get(getBookingById);

module.exports = bookingRouter;
