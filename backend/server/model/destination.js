const { Sequelize } = require("sequelize");
const db = require('../database/client');

const { DataTypes } = Sequelize;

const destinations = db.define('destiantions', {
    name: {
        type: DataTypes.STRING
    },
    coordinat: {
        type: DataTypes.ARRAY(DataTypes.FLOAT)
    },
    location: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.TEXT
    },
    imageURL: {
        type: DataTypes.ARRAY(DataTypes.STRING)
    },
    price: {
        type: DataTypes.INTEGER
    },
    rating: {
        type: DataTypes.FLOAT
    }
}, {
    freezeTableName: true
})

module.exports = destinations;