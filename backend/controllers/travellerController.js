const asyncHandler = require('express-async-handler');

// model imports
const Traveller = require('../models/traveller');

// @desc    Get all Travellers
// @route   POST /api/travellers
// @access  Public
const getTravellers = asyncHandler(async (req, res) => {
  const travellers = await Traveller.findAll();
  res.json(travellers);
});

// @desc    Get a Traveller by ID
// @route   POST /api/travellers/:id
// @access  Public
const getTravellerById = asyncHandler(async (req, res) => {
  const traveller = await Traveller.findOne({
    where: { email: req.params.email },
  });
  if (traveller) {
    res.json(traveller);
  } else {
    res.status(404);
    throw new Error('Traveller not found');
  }
});

module.exports = { getTravellers, getTravellerById };
