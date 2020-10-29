const asyncHandler = require('express-async-handler');
const { sequelize } = require('../models');

// model imports
const { Agent } = sequelize;
// utility imports
const generateToken = require('../utils/generateToken.js');

// @desc    Register a new Agent
// @route   POST /api/agents
// @access  Public
const registerAgent = asyncHandler(async (req, res) => {
  const { fname, lname, phone, email, password } = req.body;
  const agentExists = await Agent.findOne({ email });
  if (agentExists) {
    res.status(400);
    throw new Error('Already registered');
  } else {
    const agent = await Agent.create({
      fname,
      lname,
      phone,
      email,
      password,
    });
    if (agent) {
      const { agent_id, fname, lname, phone, email } = agent;
      res.status(201).json({
        agent_id,
        fname,
        lname,
        phone,
        email,
        // isAdmin,
        token: generateToken(agent_id),
      });
    } else {
      res.status(400);
      throw new Error('Invalid agent data');
    }
  }
});

// @desc    Auth an Agent and get their token (jwt)
// @route   POST /api/agents/login
// @access  Public
const authAgent = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  const agent = await Agent.findOne({ email });
  if (agent && (await Agent.matchPassword(password))) {
    const { agent_id, name, email } = agent;
    res.json({
      agent_id,
      name,
      email,
      // isAdmin,
      token: generateToken(agent_id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

module.exports = { registerAgent, authAgent };
