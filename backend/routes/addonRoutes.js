const express = require('express');

// controller imports
const { getAddons, getAddonById } = require('../controllers/addonController');

// middleware imports
const { protect } = require('../middleware/authMiddleware.js');

const addonRouter = express.Router();

addonRouter.route('/').get(getAddons);
addonRouter.route('/:id').get(getAddonById);

module.exports = addonRouter;
