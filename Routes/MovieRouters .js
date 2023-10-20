const express =require("express");
const { getMovies, addMovie, deleteMovie, getByIdAndEditMovie, getByIdMovie } = require("../Controllers/MovieControllers ");
const router=express.Router()
router.get("/get_movie",getMovies);
router.get("/details/:_id", getByIdMovie);
router.post("/add_movie",addMovie);
router.put("/edit/:_id",getByIdAndEditMovie);


router.delete("/delete/:_id",deleteMovie);
module.exports = router;