const mongoose=require("mongoose")

//create schema
const schema=mongoose.Schema

const userSchema=new schema({
    username:{
        type:String,
        required:true ,unique:true
    },
    email:{
        type:String,required:true,unique:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    favoris:{
      type:[{}]
    }
})
//export
module.exports =mongoose.model("user",userSchema)
