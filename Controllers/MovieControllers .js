const MovieModel=require("../Models/MovieModel")

exports.addMovie=async(req,res)=>{
    try {
        const{Title,Description,PosteUrl,Rate,Trailer}=req.body
        const newMovie= new MovieModel({Title,Description,PosteUrl,Rate,Trailer})
        await newMovie.save()
        res.status(200).send({msg:"Movie added successfully!",newMovie})
    } catch (error) {
        res.status(400).send({msg:"cannot add Movie",error})
    }
}

exports.getMovies=async(req,res)=>{
    try {
        const Movies=await  MovieModel.find()
        res.status(200).json({msg:"Movies found successfully!",Movies})
    } catch (error) {
        res.status(500).send({msg:"error on getting all Movies",error})
    }
}

exports.getByIdMovie=async(req,res)=>{
    try {
        const {_id}=req.params
        const Movie= await MovieModel.findById({_id})
        if(!Movie){
            res.status(400).send({msg:'Movie not found'})
        }
        else{
            res.status(200).send({msg:"Movie found successfully!",Movie})
        }
    } catch (error) {
        res.status(500).send({msg:"cannot find Movie",error})
    }
}

exports.deleteMovie=async(req,res)=>{
    try {
        const {_id}=req.params
        await MovieModel.findByIdAndDelete({_id})
        res.status(200).send({msg:'deleted successfully!'})
    } catch (error) {
        res.status(400).send({msg:'error on delete Movie',error})
    }
}

exports.getByIdAndEditMovie=async(req,res)=>{
    try {
        const {_id}=req.params
        const newMovie=req.body
        const Movies=await MovieModel.updateOne({_id},{$set:newMovie})
        //Movie.findByIdAndUpdate({_id},newMovie)
        res.status(200).send({msg:"Movie updated successfully!",Movies})
    } catch (error) {
        res.status(400).send({msg:"error on updating Movie!",error})
    }
}

