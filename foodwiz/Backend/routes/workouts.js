const express = require('express')

const router = express.Router()


//Get all workouts
router.get('/',(req, res) =>{
    res.json({mssg:'Get all workouts'})
})

//Get single workout
router.get('/:id',(req,res)=>{
    res.json({mssg:'Get single workout'})
})

//Post a new workout
router.post('/',(req,res)=>{
    res.json({mssg:'Post a new workout'})
})

//Delete workout
router.delete('/:id',(req,res)=>{
    res.json({mssg:'Delete workout'})
})
//Update workout
router.patch('/:id',(req,res)=>{
    res.json({mssg:'Update workout'})
})

module.exports = router