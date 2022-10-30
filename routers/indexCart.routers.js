const express=require("express")
const { createIndexCart, getIndexCart, updateIndexCart, deleteIndexCart } = require("../controllers/Addmin/indexCart.controllers")
const {IndexCart}=require("../models")
const indexCartRouter=express.Router()

indexCartRouter.post("/",createIndexCart)
indexCartRouter.get("/",getIndexCart)
indexCartRouter.put("/:id",updateIndexCart)
indexCartRouter.delete("/:id",deleteIndexCart)
module.exports={
    indexCartRouter
}
