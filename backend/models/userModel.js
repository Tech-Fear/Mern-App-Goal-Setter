const mongoose=require('mongoose')
const userScehma=mongoose.Schema({
    name:{
        type:String,
        required: [true,"please add a name"]
    },
    email:{
        type:String,
        required: [true,"please add a email"],
        unique:[true, "account already exist"]
    },
    password:{
        type:String,
        required: [true,"please add a password"]
    },
},
{
    timestamps:true
})
module.exports=mongoose.Model('User',userScehma)