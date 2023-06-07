const { Sequelize } = require('sequelize')
const db = require('../database/client')

const { DataTypes } = Sequelize;

const package = db.define('packages', {
    City: {
        type: DataTypes.STRING
    },
    Place_Tourism1: {
        type: DataTypes.STRING
    },
    Place_Tourism2: {
        type: DataTypes.STRING
    },
    Place_Tourism3: {
        type: DataTypes.STRING
    },
    Place_Tourism4: {
        type: DataTypes.STRING
    },
    Place_Tourism5: {
        type: DataTypes.STRING
    },
}, {
    freezeTableName: true,
    timestamps: false
})

module.exports = package;