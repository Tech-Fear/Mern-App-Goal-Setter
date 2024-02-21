const asyncHandler=require('express-async-handler')


// @desc Get goals
// @routes Get /api/goals
// @access Private
const getGoals=asyncHandler(async (req,res)=>{
    res.status(200).send({message:`Get Goals`})
})
// @desc Set goals
// @routes Post /api/goals
// @access Private
const setGoals=asyncHandler(async (req,res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error("Please add a text field")
    }
    res.status(200).send({message:"Set Goals"})
})
// @desc Update Goal
// @routes Put /api/goals/:id
// @access Private
const updateGoal=asyncHandler(async (req,res)=>{
    res.status(200).send({message:`Update Goal ${req.params.id}`})
})
// @desc Delete goals
// @routes Delete /api/goals/:id
// @access Private
const deleteGoal=asyncHandler(async (req,res)=>{
    res.status(200).send({message:`Delete Goal ${req.params.id}`})
})
module.exports={
    getGoals,
    setGoals, 
    updateGoal,
    deleteGoal
}