const { Op } = require("sequelize")
const { Product, Categories, Production } = require("../../models")

const getAllProduct = async (req, res) => {



  const perPage = parseInt(req.query.perPage, 10);
  const {name} = req.query;
  const page = parseInt(req.query.page, 10) || 1;

  const index_categories = parseInt(req.query.index_categories, 10)

const {sortbysalse}=req.query
  const skip = ((page - 1) * perPage);

  try {
    if (!index_categories&&!name) {
     
      const { count } = await Product.findAndCountAll({ offset: skip, limit: perPage })
      let totalPage = Math.ceil(count / perPage)
      const productList = await Product.findAll({ offset: skip, limit: perPage })
      if (page <= totalPage) {
        if (page === 1) {
          productList.pagination = {
            current: page,
            perPage: perPage,

            total: count,
            totalPage: totalPage,
            link: { next: `http://localhost:3000/api/v1/product?perPage=${perPage}&page=${page <= totalPage - 1 ? page + 1 : undefined}` }
          }
        } else if (page === totalPage) {
          productList.pagination = {
            current: page,
            perPage: perPage,

            total: count,
            totalPage: totalPage,
            link: {

              previous: `http://localhost:3000/api/v1/product?perPage=${perPage}&page=${page > 0 ? page - 1 : undefined}`
            }
          }
        } else {
          productList.pagination = {
            current: page,
            perPage: perPage,

            total: count,
            totalPage: totalPage,
            link: {
              link: { next: `http://localhost:3000/api/v1/product?perPage=${perPage}&page=${page <= totalPage - 1 ? page + 1 : undefined}` },
              previous: `http://localhost:3000/api/v1/product?perPage=${perPage}&page=${page > 0 ? page - 1 : undefined}`
            }
          }
        }
      } else productList.pagination = {
        err: 'queried page ' + page + ' is >= to maximum page number ' + totalPage
      }



     res.status(200).send({ data: productList, pagination: productList.pagination })
    }
   else if (name&&!index_categories) {
     
      const { count } = await Product.findAndCountAll({where:{
        name:{
            [Op.like]:`%${name}%`
        }
    }, offset: skip, limit: perPage })
      let totalPage = Math.ceil(count / perPage)
      const productList = await Product.findAll({ 
        where:{
          name:{
              [Op.like]:`%${name}%`
          }
      },
        offset: skip, limit: perPage })
      if (page <= totalPage) {
        if (page === 1) {
          productList.pagination = {
            current: page,
            perPage: perPage,

            total: count,
            totalPage: totalPage,
            link: { next: `http://localhost:3000/api/v1/product?perPage=${perPage}&page=${page <= totalPage - 1 ? page + 1 : undefined}` }
          }
        } else if (page === totalPage) {
          productList.pagination = {
            current: page,
            perPage: perPage,

            total: count,
            totalPage: totalPage,
            link: {

              previous: `http://localhost:3000/api/v1/product?perPage=${perPage}&page=${page > 0 ? page - 1 : undefined}`
            }
          }
        } else {
          productList.pagination = {
            current: page,
            perPage: perPage,

            total: count,
            totalPage: totalPage,
            link: {
              link: { next: `http://localhost:3000/api/v1/product?perPage=${perPage}&page=${page <= totalPage - 1 ? page + 1 : undefined}` },
              previous: `http://localhost:3000/api/v1/product?perPage=${perPage}&page=${page > 0 ? page - 1 : undefined}`
            }
          }
        }
      } else productList.pagination = {
        err: 'queried page ' + page + ' is >= to maximum page number ' + totalPage
      }



     res.status(200).send({ data: productList, pagination: productList.pagination })
    }
    if (index_categories) {
     
      const { count } = await Product.findAndCountAll({where:{
        index_categories:{
            [Op.like]:`%${index_categories}%`
        }
    }, offset: skip, limit: perPage })
      let totalPage = Math.ceil(count / perPage)
      const productList = await Product.findAll({ 
        where:{
          index_categories:{
              [Op.like]:`%${index_categories}%`
          }
      },
        offset: skip, limit: perPage })
      if (page <= totalPage) {
        if (page === 1) {
          productList.pagination = {
            current: page,
            perPage: perPage,

            total: count,
            totalPage: totalPage,
            link: { next: `http://localhost:3000/api/v1/product?perPage=${perPage}&page=${page <= totalPage - 1 ? page + 1 : undefined}` }
          }
        } else if (page === totalPage) {
          productList.pagination = {
            current: page,
            perPage: perPage,

            total: count,
            totalPage: totalPage,
            link: {

              previous: `http://localhost:3000/api/v1/product?perPage=${perPage}&page=${page > 0 ? page - 1 : undefined}`
            }
          }
        } else {
          productList.pagination = {
            current: page,
            perPage: perPage,

            total: count,
            totalPage: totalPage,
            link: {
              link: { next: `http://localhost:3000/api/v1/product?perPage=${perPage}&page=${page <= totalPage - 1 ? page + 1 : undefined}` },
              previous: `http://localhost:3000/api/v1/product?perPage=${perPage}&page=${page > 0 ? page - 1 : undefined}`
            }
          }
        }
      } else productList.pagination = {
        err: 'queried page ' + page + ' is >= to maximum page number ' + totalPage
      }



     res.status(200).send({ data: productList, pagination: productList.pagination })
    }
    if(sortbysalse&&perPage&&!index_categories&&!name){

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
          [Op.not]: "NO"
        }
      }
    })
    // if(productList){
    res.status(200).send({status:200,success:true,data:productList})
    //   }
    //   else{
    //     res.status(200).send("Hiện tại chưa có khuyến mãi")
    //   }

    // }
  } catch (error) {
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
          [Op.not]: "NO"
        }
      }
    })
    if (productList) {
      res.status(200).send(productList)
    }
    else {
      res.status(400).send("Hiện tại chưa bán chạy")
    }


  } catch (error) {
    res.status(500).send(error.message)

  }
}
const getDetailProduct = async (req, res) => {
  const { id } = req.params
  try {
    const detailProduct = await Product.findOne({
      where: {
        id,
      },
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
  const { name, price, description, discount, index_categories, index_production } = req.body

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

  getAllProduct,
  getDetailProduct,
  updateProduct,

  getProductPromo,
  getHotProduct
}