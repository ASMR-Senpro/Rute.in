const express = require('express');
const route = express.Router();
const destController = require('../controller/destination')

//destination router
route.post('/', destController.create)
route.get('/', destController.getAll)
route.get('/:id', destController.getByID)
route.put('/:id', destController.edit)
route.delete('/:id', destController.delete)

module.exports= route