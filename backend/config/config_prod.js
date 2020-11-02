require('dotenv').config();

module.exports = {
  connectionString: process.env.DATABASE_URL,
  dialect: 'postgres',
  ssl: {
    rejectUnauthorized: false,
  },
};
