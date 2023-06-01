const {Sequelize} = require('sequelize');
const db = require(('../database/client'));

const {DataTypes} = Sequelize;

const plans = db.define('plans',{
    userID:{
        type: DataTypes.STRING
    },
    title:{
        type: DataTypes.STRING
    },
    destinationID:{
        type: DataTypes.ARRAY(DataTypes.INTEGER)
    }
},{
    freezeTableName: true
})

module.exports = plans;