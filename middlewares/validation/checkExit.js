const {User} = require("../../models")

const checkExits=(Model)=>{
return async(req,res,next)=>{
    const {id}=req.params
    const category=await Model.findOne({
        where:{
            id
        }
    })
    if(category){
        console.log(category)
        next()
    }else{
        res.status(404).send(`không tìm thấy category có id :${id} `)
    }
}}
const checkExitsEmail=async(req,res,next)=>{
   
        const {email}=req.body
        const existUser=await User.findOne({
            where:{
                email:email
            }
        })
       
        if(existUser){
            
            res.status(500).send({message:"email đã được sử dụng vui lòng đăng nhập lại"})
        }else{
           next()
        }
    
   
    }
module.exports={
    checkExits,
     checkExitsEmail
}