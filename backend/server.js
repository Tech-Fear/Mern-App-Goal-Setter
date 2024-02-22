const express=require('express')
const colors = require('colors')
const dotenv=require('dotenv').config()
const { errorHandler }=require('./middleware/errorMiddleware.js')
const connectDB=require('./config/db.js')

connectDB()
const port=process.env.PORT || 5000
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use("/api/goals/",require('./routes/goalRoutes.js'))
app.use("/api/users/",require('./routes/userRoutes.js'))
app.use(errorHandler)
app.listen(port,()=>{
    console.log(`Server started at http://localhost:${port}`)
})