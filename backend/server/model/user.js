const {Sequelize} = require('sequelize');
const db = require(('../database/client'));

const {DataTypes} = Sequelize;

const users = db.define('users',{
    name:{
        type: DataTypes.STRING
    },
    username:{
        types: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    resfresh_token:{
        type: DataTypes.TEXT
    }
},{
    freezeTableName: true
})

module.exports = users;