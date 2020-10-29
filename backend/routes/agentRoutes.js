const express = require('express');

// controller imports
const { registerAgent, authAgent } = require('../controllers/agentController');

// middleware imports
const { protect } = require('../middleware/authMiddleware.js');

const agentRouter = express.Router();

agentRouter.route('/').post(registerAgent);
agentRouter.post('/login', authAgent);

module.exports = { agentRouter };
