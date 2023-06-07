const {Sequelize} = require('sequelize');
const db = require(('../database/client'));

const {DataTypes} = Sequelize;

const users = db.define('users',{
    email:{
        type: DataTypes.STRING
    },
    name:{
        type: DataTypes.STRING
    },
    username:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    province:{
        type: DataTypes.STRING
    },
    city:{
        type: DataTypes.STRING
    },
    birth:{
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