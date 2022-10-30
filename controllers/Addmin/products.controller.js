const { Op } = require("sequelize")
const { Product, Categories,Production } = require("../../models")

const createProduct = async (req, res) => {
  const { name, price, description,discount,feature,index_categories,index_production } = req.body
  const { file } = req
  const urlImage = `http://localhost:3000/${file.path}`
  const newProduct = await Product.create({ name, price, image: urlImage, description,index_categories,feature,index_production,discount })
  // console.log(newProduct)
  res.status(201).send(newProduct)
}
const getAllProduct = async (req, res) => {
  const {name}=req.query
  try{
    if(name){
      const productList=await Product.findAll({
        where:{
            name:{
                [Op.like]:`%${name}%`
            }
        }
    })
    res.status(200).send(productList)

    }else{
      const productList = await Product.findAll
        (
          {
            include: [
              {
                model: Categories,
                as: "category"
              },
              {
                model: Production,
                as: "production"
             },
            ]
          }
        )
      res.status(200).send(productList)
        }
  } catch (error) {
    res.status(500).send(error.message)

  }

}
const getProductPromo = async (req, res) => {
  // const { name } = req.query
  try {
    // if (name=feature) {
      const productList = await Product.findAll({
        where: {
          discount: {
            [Op.not]:"NO"
          }
        }
      })
      // if(productList){
         res.status(200).send(productList)
    //   }
    //   else{
    //     res.status(200).send("Hiện tại chưa có khuyến mãi")
    //   }
     
    // }
  }catch (error) {
    res.status(500).send(error.message)

  }
}
const getHotProduct = async (req, res) => {
  // const { name } = req.query
  try {
    // if (name=sale) {
      const productList = await Product.findAll({
        where: {
          feature: {
            [Op.not]:"NO"
          }
        }
      })
       if(productList){
         res.status(200).send(productList)
      }
      else{
        res.status(400).send("Hiện tại chưa bán chạy")
      }
     
    
  }catch (error) {
    res.status(500).send(error.message)

  }
}
const getDetailProduct = async (req, res) => {
  const { id } = req.params
  try {
    const detailProduct = await Product.findOne({
      where: {
        id
      }
    })
    res.status(200).send(detailProduct)
  } catch (error) {
    res.status(500).send(error)
  }
}
const updateProduct = async (req, res) => {
  const { id } = req.params
  const { file } = req
  const urlImage = `http://localhost:3000/${file.path}`
  const { name, price, description, discount,index_categories ,index_production} = req.body

  try {
    const detailProduct = await Product.findOne({
      where: {
        id
      }

    })
    detailProduct.name = name
    detailProduct.price = price
    detailProduct.image = urlImage
    detailProduct.description = description
    detailProduct.discount = discount
    detailProduct.index_categories = index_categories
    detailProduct.index_production = index_production
    await detailProduct.save()
    res.status(200).send(detailProduct)
  } catch (error) {
    res.status(500).send(error)

  }

}
const deleteProduct = async (req, res) => {
  const { id } = req.params
  try {
    await Product.destroy({
      where: {
        id
      }
    })
    res.status(200).send("xóa thành công ")
  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports = {
  createProduct,
  getAllProduct,
  getDetailProduct,
  updateProduct,
  deleteProduct,
  getProductPromo,
  getHotProduct
}