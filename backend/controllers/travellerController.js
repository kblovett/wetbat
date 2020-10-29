const asyncHandler = require('express-async-handler');

// model imports
const Traveller = require('../models/traveller');

const getTravellers = asyncHandler(async (req, res) => {
  const travellers = await Traveller.findAll();
  res.json(travellers);
});

const getTravellerById = asyncHandler(async (req, res) => {
  const traveller = Traveller.findOne({ where: { email: req.params.email } });
  if (traveller) {
    res.json(traveller);
  } else {
    res.status(404);
    throw new Error('Traveller not found');
  }
});

module.exports = { getTravellers, getTravellerById };
