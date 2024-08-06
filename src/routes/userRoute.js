const express = require('express')
const userRoute = express.Router()
const userController = require('./../controllers/userController')
const { userSignUp, userLogin } = require('../services/userService')

userRoute.post('/signup',userController,userSignUp)
userRoute.post('/login',userController,userLogin)

module.exports = userRoute;