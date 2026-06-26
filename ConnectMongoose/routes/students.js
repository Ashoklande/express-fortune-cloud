
const express = require('express');
const route = express.Router();
//student register controller
const {registerStudent , updateStudent ,partialStudentUpdate} = require("../controllers/studentController");

route.post('/register',registerStudent);

//full update 
route.put('/updateStudent',updateStudent);

//partial update
route.patch('/partial-update/:id',partialStudentUpdate)

module.exports = route;