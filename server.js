const express=require("express")
const connect = require("./config/connectDB")

//create instance
const app=express()
// middleware

app.use(express.json())

//require dotenv

require('dotenv').config()

//connecting to DB
connect()
//corse config
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))
//create PORT
const PORT=process.env.PORT

//create server
app.listen(PORT, (error)=>{
    error?
    console.log(error)
    :console.log(`server is running on PORT ${PORT}`)
})

app.use("/api/products",require('./Routes/productroutrs'))
app.use("/api/users",require('./Routes/userroute'))
app.use("/api/movies",require('./Routes/MovieRouters '))