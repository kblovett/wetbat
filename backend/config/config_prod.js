require('dotenv').config();

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
