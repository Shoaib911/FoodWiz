const express = require('express')
const Workout=require('../models/workoutModel')
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
router.post('/',async(req,res)=>{
    const {title,load,reps}=req.body
    try{
        const workout= await Workout.create({title,reps,load})
        res.status(200).json(workout)
    }catch{
        res.status(400).json({error:err.message})
    }
    
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