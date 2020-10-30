const asyncHandler = require('express-async-handler');

// model imports
const Addon = require('../models/addon');

// @desc    Get all Addons
// @route   POST /api/addons
// @access  Public
const getAddons = asyncHandler(async (req, res) => {
  const addons = await Addon.findAll();
  res.json(addons);
});

// @desc    Get a Addon by ID
// @route   POST /api/addons/:id
// @access  Public
const getAddonById = asyncHandler(async (req, res) => {
  const addon = await Addon.findOne({
    where: { id: req.params.id },
  });
  if (addon) {
    res.json(addon);
  } else {
    res.status(404);
    throw new Error('Addon not found');
  }
});

module.exports = { getAddons, getAddonById };
