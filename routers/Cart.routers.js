
const express=require("express")
const { cretaeCart, getAllCart, getDetailCart, updateCart, deleteCart } = require("../controllers/Addmin/carts.controllers")
//const { cretaeCart, getAllCart, getDetailCart, updateCart, deleteCart } = require("../controllers/carts.controllers")
const cartRouter=express.Router()

cartRouter.post("/",cretaeCart)
cartRouter.get("/",getAllCart)
cartRouter.get("/:id",getDetailCart)
cartRouter.put("/:id",updateCart)
cartRouter.delete("/:id",deleteCart)


module.exports={
    cartRouter
}