const express = require('express');

// controller imports
const {
  getTravellers,
  getTravellerById,
} = require('../controllers/travellerController');

// middleware imports
const { protect } = require('../middleware/authMiddleware.js');

const travellerRouter = express.Router();

travellerRouter.route('/').get(getTravellers);
travellerRouter.route('/:id').get(getTravellerById);

module.exports = { travellerRouter };
