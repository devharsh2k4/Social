const express = require('express')
require('dotenv').config()
const app = express()
const PORT = process.env.PORT
const connection = require ('./src/helpers/db')
const userRoute = require('./src/routes/userRoute')

app.use(express.json())
app.use('/user',userRoute)

app.listen(PORT,()=>{
    console.log("server running on",PORT);
})
