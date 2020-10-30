const asyncHandler = require('express-async-handler');

// model imports
const Country = require('../models/country');

// @desc    Get all Countries
// @route   POST /api/countries
// @access  Public
const getCountries = asyncHandler(async (req, res) => {
  const countries = await Country.findAll();
  res.json(countries);
});

// @desc    Get a Country by ID
// @route   POST /api/countries/:id
// @access  Public
const getCountryById = asyncHandler(async (req, res) => {
  const country = await Country.findOne({
    where: { id: req.params.id },
  });
  if (country) {
    res.json(country);
  } else {
    res.status(404);
    throw new Error('Country not found');
  }
});

module.exports = { getCountries, getCountryById };
