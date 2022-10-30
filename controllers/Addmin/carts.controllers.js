const {Cart}=require("../../models")

const cretaeCart=async(req,res)=>{
    
    const {total_price,index_user}=req.body
    try { 
       const newCart= await Cart.create({total_price,index_user})
   res.status(201).send(newCart)

       
    } catch (error) {
       res.status(500).send(error)
    }
  
}
const getAllCart=async (req,res)=>{
   
            const cartList=await Cart.findAll()
       res.status(200).send(cartList)
       }
      
   

const getDetailCart=async (req,res)=>{
   const {id}=req.params;
   try {
       const detailCart= await Cart.findOne({
           where:{
               id
           }
       })
       res.status(200).send(detailCart)

   } catch (error) {
       res.status(500).send(error)
       
   }
}
const updateCart=async(req,res)=>{
   const {id}=req.params
   const {total_price}=req.body
   try {
       const detailCart= await Cart.findOne({
           where:{
               id
           }
       })
       detailCart.total_price=total_price
       await detailCart.save()
       res.status(200).send(detailCart)

   } catch (error) {
       res.status(500).send(error)
       
   
}
}
const deleteCart=async (req,res)=>{
   const {id}=req.params
   try {
       await Cart.destroy({
           where:{
               id
           }
       })
       res.status(200).send("xóa thành công")
   } catch ({error}) {
       res.status(500).send(error)
       
   }
}
module.exports={
   cretaeCart,
   getAllCart,
   getDetailCart,
   updateCart,
   deleteCart
}