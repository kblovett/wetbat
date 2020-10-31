const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');

// model imports
const Agent = require('../models/agent');
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
    const salt = await bcrypt.genSalt(10);
    const agent = await Agent.create({
      fname,
      lname,
      phone,
      email,
      password: await bcrypt.hash(password, salt),
    });
    if (agent) {
      const { id, fname, lname, phone, email } = agent;
      res.status(201).json({
        id,
        fname,
        lname,
        phone,
        email,
        // isAdmin,
        token: generateToken(id),
      });
    } else {
      res.status(400);
      throw new Error('Invalid Agent data');
    }
  }
});

// @desc    Auth an Agent and get their token (jwt)
// @route   POST /api/agents/login
// @access  Public
const authAgent = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  // console.log(email, password);
  const agent = await Agent.findOne({ where: { email } });
  const agentPass = agent.getDataValue('password');
  // console.log(agentPass, agent);
  const passCheck = await bcrypt.compare(password, agentPass);
  if (agent && passCheck) {
    const { id, fname, lname, email } = agent;
    res.json({
      id,
      fname,
      lname,
      email,
      // isAdmin,
      token: generateToken(id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

module.exports = { registerAgent, authAgent };
