const express = require('express');
const route = express.Router();
const userController = require('../controller/user')

//user router
route.post('/', userController.signUp)
route.get('/', userController.signIn)
route.get('/:id', userController.signOut)

module.exports= route