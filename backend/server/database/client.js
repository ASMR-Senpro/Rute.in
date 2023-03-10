const { Sequelize } = require('sequelize')

const db = new Sequelize('rutein', 'postgres', 'raven03', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = db;