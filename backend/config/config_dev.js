require('dotenv').config();

module.exports = {
  username: process.env.DBUSER,
  password: process.env.DBPW,
  database: process.env.DBNAME,
  host: process.env.DBHOST,
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
