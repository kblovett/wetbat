const express = require('express');

// controller imports
const {
  getCountries,
  getCountryById,
} = require('../controllers/countryController');

// middleware imports
const { protect } = require('../middleware/authMiddleware.js');

const countryRouter = express.Router();

countryRouter.route('/').get(getCountries);
countryRouter.route('/:id').get(getCountryById);

module.exports = countryRouter;
