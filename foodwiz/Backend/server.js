require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts');
const userRoutes =require('./routes/UserRoutes');
const cors = require('cors');

//express app
const app = express()

//middleware
app.use(cors());
app.use(express.json())
app.use((req, res, next)=>{
    console.log(req.path,req.method)
    next()
})

//routes
app.use('/api/users', userRoutes);
app.use('/api/workouts',workoutRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    //listen for requests
    app.listen(process.env.PORT,()=> {
        console.log("server is running on port",process.env.PORT)
    })
})
.catch((error)=>{
    console.log(error)
})


process.env