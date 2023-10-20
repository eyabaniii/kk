const mongoose=require("mongoose")

//function Connect

const connect =async()=>{
    try {
        console.log("initialisation")
        console.log("starting")
        console.log("connecting to database")
        await mongoose.connect(process.env.DB_URI)
        console.log("connected to database!!")
    } catch (error) {
        console.log(error)
    }
}

//export
module.exports =connect