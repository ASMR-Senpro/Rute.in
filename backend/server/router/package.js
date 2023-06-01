const express = require('express');
const route = express.Router();
const packController = require('../controller/package')

route.get('/',packController.getAll)

module.exports= route