const express = require('express');
const route = express.Router();
const userController = require('../controller/user')
const { verifyToken } = require('../middleware/verifyToken')
const {refreshToken} = require('../controller/refreshToken')

//user router
route.get('/', verifyToken)
route.post('/', userController.signUp)
route.post('/signin', userController.signIn)
route.get('/token', refreshToken)
route.get('/:id', userController.getByID)
route.put('/:id', userController.edit)

module.exports= route