const mongoose = require ('mongoose');

const UserSchema = new mongoose.schema({
    username: {type:String, required:true,min:6,max:30},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true}
})

const User = mongoose.model('user',UserSchema)
module.exports = User;