const asyncHandler=require('express-async-handler')
const Goal=require('../models/goalModel.js')
// @desc Get goals
// @routes Get /api/goals
// @access Private
const getGoals=asyncHandler(async (req,res)=>{
    const goals=await Goal.find()

    res.status(200).send(goals)
})
// @desc Set goals
// @routes Post /api/goals
// @access Private
const setGoals=asyncHandler(async (req,res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error("Please add a text field")
    }
    const goal = await Goal.create({
        text:req.body.text
    })
    res.status(200).send(goal)
})
// @desc Update Goal
// @routes Put /api/goals/:id
// @access Private
const updateGoal=asyncHandler(async (req,res)=>{
    const goal=await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error("Goal not found")
    }
    const updatedGoal=await Goal.findByIdAndUpdate(req.params.id,req.body,{
        new:true
    })
    res.status(200).send(updatedGoal)
})
// @desc Delete goals
// @routes Delete /api/goals/:id
// @access Private
const deleteGoal=asyncHandler(async (req,res)=>{
    const goal=await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error("Goal not found")
    }
    // const deletedGoal=await Goal.findByIdAndDelete(req.params.id)
    await goal.remove()
    res.status(200).send({id: req.params.id})
})
module.exports={
    getGoals,
    setGoals, 
    updateGoal,
    deleteGoal
}