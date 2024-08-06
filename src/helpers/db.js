const mongoose = require('mongoose')
const MONGODB_URI = process.env.MONGODB_URL

const connection = mongoose.connect(MONGODB_URI).then(()=>{
    console.log("MONGODB DATABASE Connected successfully!!")
}).catch((err)=>{
    console.error(err)
})


module.exports = connection