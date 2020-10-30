const { request } = require('express');
const asyncHandler = require('express-async-handler');

// model imports
const Booking = require('../models/booking');

// @desc    Get all bookings
// @route   POST /api/bookings
// @access  Public
const getBookings = asyncHandler(async (req, res) => {
  const bookings = await Booking.findAll();
  res.json(bookings);
});

// @desc    Get booking by ID
// @route   POST /api/bookings/:id
// @access  Public
const getBookingById = asyncHandler(async (req, res) => {
  const booking = await Booking.findOne({ where: { id: req.params.id } });
  res.json(booking);
});

module.exports = { getBookings, getBookingById };
