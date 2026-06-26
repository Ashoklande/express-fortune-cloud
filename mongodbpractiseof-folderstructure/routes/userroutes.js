
const express = require('express');
const route = express.Router();

const {registerUser} = require('../controller/userController')

route.post('/register',registerUser)

module.exports = route;