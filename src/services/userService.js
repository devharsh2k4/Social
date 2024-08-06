const User = require('./../models/userModel')

exports.userSignUp = async (data)=> {
    const add_user = await UserActivation.create(data)
    return add_user
}