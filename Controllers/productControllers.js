const product=require("../Models/productModel")

exports.addProduct=async(req,res)=>{
    try {
        const{name,description,photo,price}=req.body
        const newProduct= new product({name,description,photo,price})
        await newProduct.save()
        res.status(200).send({msg:"product added successfully!",newProduct})
    } catch (error) {
        res.status(400).send({msg:"cannot add product",error})
    }
}

exports.getProducts=async(req,res)=>{
    try {
        const products=await product.find()
        res.status(200).send({msg:"products found successfully!",products})
    } catch (error) {
        res.status(500).send({msg:"error on getting all products",error})
    }
}

exports.getById=async(req,res)=>{
    try {
        const {_id}=req.params
        const products= await product.findById({_id})
        if(!products){
            res.status(400).send({msg:'product not found'})
        }
        else{
            res.status(200).send({msg:"product found successfully!",products})
        }
    } catch (error) {
        res.status(500).send({msg:"cannot find product",error})
    }
}

exports.deleteProduct=async(req,res)=>{
    try {
        const {_id}=req.params
        await product.findByIdAndDelete({_id})
        res.status(200).send({msg:'deleted successfully!'})
    } catch (error) {
        res.status(400).send({msg:'error on delete product',error})
    }
}

exports.getByIdAndEdit=async(req,res)=>{
    try {
        const {_id}=req.params
        const newProduct=req.body
        const products=await product.updateOne({_id},{$set:newProduct})
        //product.findByIdAndUpdate({_id},newproduct)
        res.status(200).send({msg:"product updated successfully!",products})
    } catch (error) {
        res.status(400).send({msg:"error on updating product!",error})
    }
}

