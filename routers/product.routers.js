const express=require("express")

const { createProduct, updateProduct, getDetailProduct, getAllProduct, deleteProduct, getHotProduct, getProductPromo } = require("../controllers/Addmin/products.controller")
const { authenticate } = require("../middlewares/auth/authenticate")
const { authorize } = require("../middlewares/auth/authorize")
const { uploadImage } = require("../middlewares/upload/upload-image")
 
const productsRouter=express.Router()


productsRouter.post("/",uploadImage("product"), createProduct)
productsRouter.get("/",getAllProduct)
productsRouter.get("/sale",getHotProduct)
productsRouter.get("/promo",getProductPromo)
productsRouter.get("/:id",getDetailProduct)
productsRouter.put("/:id",authenticate,authorize("admin"),uploadImage("product"),updateProduct)
productsRouter.delete("/:id",authenticate,authorize("admin") ,deleteProduct)


module.exports={
    productsRouter
}