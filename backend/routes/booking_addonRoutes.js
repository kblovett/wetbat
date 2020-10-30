const express = require('express');

// controller imports
const {
  getBooking_Addons,
  getBooking_AddonById,
} = require('../controllers/booking_addonController');

// middleware imports
const { protect } = require('../middleware/authMiddleware.js');

const booking_addonRouter = express.Router();

booking_addonRouter.route('/').get(getBooking_Addons);
booking_addonRouter.route('/:id').get(getBooking_AddonById);

module.exports = booking_addonRouter;
