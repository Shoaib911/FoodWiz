require('dotenv').config()
const express = require('express')
const workoutRoutes = require('./routes/workouts')


//express app
const app = express()
//middleware

app.use(express.json())
app.use((req, res, next)=>{
    console.log(req.path,req.method)
    next()
})

//routes
app.use('/api/workouts',workoutRoutes)

//listen reqest
app.listen(process.env.PORT,()=> {
    console.log("server is running on port",process.env.PORT)
})

process.env