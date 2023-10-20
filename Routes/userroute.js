const express =require("express");
const { register, upuser, login, deleteuser, favoritesMovies } = require("../Controllers/usercontrollers");
const { registervlidztion, vaalidator } = require("../Middleware/validator");
const auth = require("../Middleware/auth");
const router=express.Router()
router.post("/login",login);
router.post("/favoris/:userId",favoritesMovies);
router.post("/register",registervlidztion(),vaalidator,register);
router.put("/edit/:_id",upuser);
router.delete("/delete/:_id",deleteuser);
router.get("/current/",auth,(req,res)=>{res.send(req.user)});//current user
module.exports = router;
