const mongoose=require('mongoose')
const goalsSchema=mongoose.Schema(
    {
    user:{
        types:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    text:{
        type:String,
        required:[true,"Please add text value"]
    }
    
},{
    timestamps:true
})
module.exports=mongoose.model('Goal',goalsSchema)