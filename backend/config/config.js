const dotenv = require('dotenv').config();

if (process.env.NODE_ENV === 'development') {
  module.exports = {
    host: process.env.DEVDBHOST,
    port: process.env.DEVDBPORT,
    database: process.env.DEVDBNAME,
    username: process.env.DEVDBUSER,
    password: process.env.DEVDBPW,
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  };
} else if (process.env.NODE_ENV === 'production') {
  module.exports = {
    host: process.env.PRODDBHOST,
    port: process.env.PRODDBPORT,
    database: process.env.PRODDBNAME,
    username: process.env.PRODDBUSER,
    password: process.env.PRODDBPW,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  };
}
