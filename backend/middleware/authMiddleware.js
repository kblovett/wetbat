const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

// model imports
const Agent = require('../models/agent');

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    // console.log(req.headers.authorization);
    try {
      token = req.headers.authorization.split(' ')[1];
      // console.log(token);
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      // console.log(decoded);
      req.agent = await Agent.findOne({
        where: { agentUuid: decoded.id },
      });
      // console.log(req.agent);
      next();
    } catch (err) {
      res.status(401);
      throw new Error(err);
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
