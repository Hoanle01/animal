const {IndexCart} = require("../../models")

const createIndexCart=async(req,res)=>{
const {amount,index_product,index_cart}=req.body

const newIndexcart=await IndexCart.create({amount,index_product,index_cart})
res.status(200).send(newIndexcart)
}
const getIndexCart=async (req,res)=>{
    const IndexCartList=await IndexCart.findAll()
    res.status(200).send(IndexCartList)
}
const updateIndexCart=async(req,res)=>{
    const {id}=req.params
    const {amount}=req.body
    try {
        const detailIndexCart= await IndexCart.findOne({
            where:{
                id
            }
        })
        detailIndexCart.amount=amount
        await detailIndexCart.save()
        res.status(200).send(detailIndexCart)

    } catch (error) {
        res.status(500).send(error)
        
    
}
}
const deleteIndexCart=async (req,res)=>{
    const {id}=req.params
    try {
        await IndexCart.destroy({
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
    createIndexCart,
    getIndexCart,
    updateIndexCart,
    deleteIndexCart
}
