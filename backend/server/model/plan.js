const {Sequelize} = require('sequelize');
const users = require('./user');
const db = require(('../database/client'));

const {DataTypes} = Sequelize;

const plans = db.define('plans',{
    userID:{
        type: DataTypes.INTEGER,
        references:{
            model: users,
            key: 'id'
        }
    },
    Title:{
        type: DataTypes.STRING
    },
    City:{
        type: DataTypes.STRING
    },
    destinationID:{
        type: DataTypes.ARRAY(DataTypes.INTEGER)
    }
},{
    freezeTableName: true
})

module.exports = plans;