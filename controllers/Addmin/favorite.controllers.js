const {Favorite, sequelize}=require("../../models")

const createFavorite=async(req,res)=>{
    
    const {index_user,index_product}=req.body
    // console.log(index_product)
    try { 
       const newFavorite= await Favorite.create({index_user,index_product})
   res.status(201).send(newFavorite)

       
    } catch (error) {
       res.status(500).send(error)
    }
  
}
const getAllFavorite=async (req,res)=>{
   
   try {
    
        const [results] = await sequelize.query(`
        select * from users
        inner join favorites on users.id=favorites.index_user
        inner join products on products.id=favorites.index_product `)
       res.status(200).send(results)
       
   } catch (error) {
    res.status(500).send(error.message)

    
   }
}
   
    

// const updateCart=async(req,res)=>{
//    const {id}=req.params
//    const {total_price}=req.body
//    try {
//        const detailCart= await Cart.findOne({
//            where:{
//                id
//            }
//        })
//        detailCart.total_price=total_price
//        await detailCart.save()
//        res.status(200).send(detailCart)

//    } catch (error) {
//        res.status(500).send(error)
       
   
// }
// }
const deleteFavorite=async (req,res)=>{
   const {id}=req.params
   try {
       await Favorite.destroy({
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
   createFavorite,
   getAllFavorite,
//    getDetailCart,
  // updateCart,
   deleteFavorite,
}