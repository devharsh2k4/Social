const express = require('express')
const userRoute = express.Router()
const userController = require('./../controllers/userController')
const { userSignUp } = require('../services/userService')

userRoute.post('/signup',userController,userSignUp)

module.exports = userRoute;