const express = require('express');
const route = express.Router();
const planController = require('../controller/plan')

//plan router
route.post('/', planController.createPlan)
route.get('/', planController.getAll)
route.get('/:id', planController.getByUserID)
route.put('/:id', planController.edit)


module.exports= route