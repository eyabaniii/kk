const mongoose=require("mongoose")

//create schema
const schema=mongoose.Schema

const productSchema=new schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    photo:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})
//export
module.exports =mongoose.model("product",productSchema)
