const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

// model imports
const Agent = require('../models');

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.agent = await Agent.findById(decoded.id).select('-password');
      next();
    } catch (err) {
      res.status(401);
      throw new Error('Not authorized, token failed');
    }
  }

  if (!token) {
    res.status(401);
    throw new Error('Not authorized, no token');
  }
});

// const admin = (req, res, next) => {
//   if (req.agent && req.agent.isAdmin) {
//     next();
//   } else {
//     res.status(410);
//     throw new Error('Not authorized as an Admin');
//   }
// };

module.exports = {
  protect,
  // admin
};
