const asyncHandler = require('express-async-handler');

// model imports
const Province = require('../models/province');

// @desc    Get all Provinces
// @route   POST /api/provinces
// @access  Public
const getProvinces = asyncHandler(async (req, res) => {
  const provinces = await Province.findAll();
  res.json(provinces);
});

// @desc    Get a Province by ID
// @route   POST /api/provinces/:id
// @access  Public
const getProvinceById = asyncHandler(async (req, res) => {
  const province = await Province.findOne({
    where: { id: req.params.id },
  });
  if (province) {
    res.json(province);
  } else {
    res.status(404);
    throw new Error('Province not found');
  }
});

module.exports = { getProvinces, getProvinceById };
