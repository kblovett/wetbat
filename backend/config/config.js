const dotenv = require('dotenv').config();

// if (process.env.NODE_ENV === 'development') {
//   module.exports = {
//     host: process.env.DEVDBHOST,
//     port: process.env.DEVDBPORT,
//     database: process.env.DEVDBNAME,
//     username: process.env.DEVDBUSER,
//     password: process.env.DEVDBPW,
//     dialect: 'postgres',
//     pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000,
//       idle: 10000,
//     },
//   };
// } else if (process.env.NODE_ENV === 'production') {
module.exports = {
  host: 'ec2-52-0-155-79.compute-1.amazonaws.com',
  port: 5432,
  database: 'dejt8k54ibgmjm',
  username: 'qcfdaudwyzacak',
  password: 'fd0d853f15c05533aa9737b200862e17f5e3fbe2d2417a0e447d8da208f4b3cc',
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
// }
