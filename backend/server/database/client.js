// const { Sequelize } = require('sequelize')

// const db = new Sequelize('rutein', 'postgres', 'raven03', {
//     host: 'localhost',
//     dialect: 'postgres'
// });

// module.exports = db;

const { Sequelize } = require('sequelize')

const db = new Sequelize('postgres', 'asmradmin', 'Senpro23!', {
    host: 'rutein.postgres.database.azure.com',
    port: 5432,
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
      }
});

module.exports = db;