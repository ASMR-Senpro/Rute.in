const {Sequelize} = require('sequelize');
const db = require(('../database/client'));

const {DataTypes} = Sequelize;

const users = db.define('users',{
    name:{
        type: DataTypes.STRING
    },
    username:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    resfresh_token:{
        type: DataTypes.TEXT
    },
    role:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true,
    timestamps: false
})

module.exports = users;