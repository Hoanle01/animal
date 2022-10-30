const express=require('express');
const favorite = require('../models/favorite');
const { cartRouter } = require('./Cart.routers');
const { categoriesRouter } = require('./categories.routers');
const { favoriteRouter } = require('./favorite.routers');
const { indexCartRouter } = require('./indexCart.routers');
const { orderRouter } = require('./order.routers');
const { productsRouter } = require('./product.routers');
const { productionRouter } = require('./production.routers');
const { userRouter } = require('./user.routers');


const rootRouter=express.Router();
rootRouter.use('/category',categoriesRouter)
rootRouter.use('/user',userRouter)
rootRouter.use('/product',productsRouter)
rootRouter.use('/production',productionRouter)
rootRouter.use('/indexcart',indexCartRouter)
rootRouter.use('/cart',cartRouter)
rootRouter.use('/favorite',favoriteRouter)
rootRouter.use('/order',orderRouter)


module.exports={
    rootRouter
}