const express = require('express');

// controller imports
const {
  getProvinces,
  getProvinceById,
} = require('../controllers/provinceController');

// middleware imports
const { protect } = require('../middleware/authMiddleware.js');

const provinceRouter = express.Router();

provinceRouter.route('/').get(getProvinces);
provinceRouter.route('/:id').get(getProvinceById);

module.exports = provinceRouter;
