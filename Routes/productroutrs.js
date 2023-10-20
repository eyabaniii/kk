const express =require("express");
const { getProducts, getById, addProduct, getByIdAndEdit, deleteProduct } = require("../Controllers/productControllers");
const router=express.Router()
router.get("/get_product",getProducts);
router.get("/get_ById/:_id", getById);
router.post("/add_product",addProduct);
router.put("/edit/:_id",getByIdAndEdit);
router.delete("/delete/:_id",deleteProduct);
module.exports = router;