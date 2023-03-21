const {Sequelize} = require('sequelize');
const db = require(('../database/client'));

const {DataTypes} = Sequelize;

const plans = db.define('users',{
    userID:{
        type: DataTypes.STRING
    },
    title:{
        type: DataTypes.STRING
    },
    destinationID:{
        types: DataTypes.ARRAY(DataTypes.INT)
    }
},{
    freezeTableName: true
})

module.exports = plans;