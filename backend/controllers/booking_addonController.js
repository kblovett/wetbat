const asyncHandler = require('express-async-handler');

// model imports
const Booking_Addon = require('../models/booking_addon');

// @desc    Get all Booking_Addons
// @route   POST /api/booking_addons
// @access  Public
const getBooking_Addons = asyncHandler(async (req, res) => {
  const booking_addons = await Booking_Addon.findAll();
  res.json(booking_addons);
});

// @desc    Get a Booking_Addon by ID
// @route   POST /api/booking_addons/:id
// @access  Public
const getBooking_AddonById = asyncHandler(async (req, res) => {
  const booking_addon = await Booking_Addon.findOne({
    where: { id: req.params.id },
  });
  if (booking_addon) {
    res.json(booking_addon);
  } else {
    res.status(404);
    throw new Error('Booking_Addon not found');
  }
});

module.exports = { getBooking_Addons, getBooking_AddonById };
