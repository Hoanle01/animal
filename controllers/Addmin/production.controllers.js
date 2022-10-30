const {Production}=require("../../models")
const createProduction=async (req,res)=>{
    const {name}=req.body
    const newProduction=await Production.create({name})
    res.status(201).send(newProduction)
}
const getAllProduction=async (req,res)=>{
    const productionList=await Production.findAll()
    res.status(200).send(productionList)
}
const updateProduction=async (req,res)=>{
    const {id}=req.params
    const {name}=req.body
    await Production.update({name},{
        where:{
            id
        }
    })
    res.status(200).send(`cập nhật thành công có id : ${id}`)
}
const deleteProduction=async (req,res)=>{
    const {id}=req.params
    await Production.destroy({
        where:{
            id
        }
    })
    res.status(200).send(`bạn đã xóa thành công có id:${id}`)

}
module.exports={
    createProduction,
    getAllProduction,
    updateProduction,
    deleteProduction
}