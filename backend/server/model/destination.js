const { Sequelize } = require("sequelize");
const db = require('../database/client');

const { DataTypes } = Sequelize;

const destinations = db.define('destiantions', {
    Place_Name: {
        type: DataTypes.STRING
    },
    Description: {
        type: DataTypes.TEXT
    },
    Category: {
        type: DataTypes.TEXT
    },
    City: {
        type: DataTypes.STRING
    },
    Price: {
        type: DataTypes.INTEGER
    },
    Rating: {
        type: DataTypes.FLOAT
    },
    Time_Minutes: {
        type: DataTypes.INTEGER
    },
    Coordinate: {
        type: DataTypes.ARRAY(DataTypes.STRING)
    },
    Lat: {
        type: DataTypes.FLOAT
    },
    Long: {
        type: DataTypes.FLOAT
    },
    ImageURL: {
        type: DataTypes.ARRAY(DataTypes.STRING)
    },
    
}, {
    freezeTableName: true,
    timestamps: false
})

module.exports = destinations;