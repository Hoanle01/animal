const express=require("express")
const { cretaeOrders, getAllOrder, getDetailOrder,  deleteOrder, updateOrderAssignment } = require("../controllers/Addmin/order.controllers")

const orderRouter=express.Router()


orderRouter.post("/",cretaeOrders)
orderRouter.get("/",getAllOrder)
orderRouter.get("/:id",getDetailOrder)
orderRouter.put("/:id",updateOrderAssignment)
orderRouter.delete("/:id",deleteOrder)

module.exports={
    orderRouter
}