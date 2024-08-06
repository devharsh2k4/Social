const User = require('./../models/userModel')
const bcrypt = require('bcrypt')
const app_constants = require('./../constants/app.json')

exports.userSignUp = async (data)=> {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(data.password,salt)
    const add_user = await User.create({...data,password:hashedPassword})
    return {
        success: app_constants.success,
        status: 200,
        message: "User added successfully",
        result: add_user
    }
}

exports.userLogin = async (data)=> {
    const {email,password} = data
   const user_data = User.findOne({email})

   if(!user_data){
       return {
           success: app_constants.BAD_REQUEST,
           status: 400,
           message: "Email does not exist",
           result: {}
       }
    }

       const password_check = await bcrypt.compare(password,user_data.password)

       if(!password_check){
              return {
                success: false,
                status: app_constants.BAD_REQUEST,
                message: "Password is incorrect",
                result: {}
              }}
    return {
        success: app_constants.success,
        status: 200,
        message: "User added successfully",
        result: {}
    }
}