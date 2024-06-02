require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const recipeRoutes = require('./routes/recipeRoutes');

const userRoutes = require('./routes/UserRoutes');
const cors = require('cors');

// Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// Routes
app.use('/api/recipes', recipeRoutes);
app.use('/api/users', userRoutes);

// Connect to the database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // Listen for requests
        app.listen(process.env.PORT, () => {
            console.log("Server is running on port", process.env.PORT);
        });
    })
    .catch((error) => {
        console.log(error);
    });
