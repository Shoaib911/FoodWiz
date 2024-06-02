require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const recipeRoutes = require('./routes/recipeRoutes');



//express app
const app = express()
app.use(bodyParser.json());
//middleware

app.use(express.json())
app.use((req, res, next)=>{
    console.log(req.path,req.method)
    next()
})

//routes
app.use('/api/recipes', recipeRoutes);

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