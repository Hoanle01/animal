const express=require("express")
const { createFavorite, deleteFavorite, getAllFavorite } = require("../controllers/Addmin/favorite.controllers")


const favoriteRouter=express.Router()
favoriteRouter.post("/",createFavorite)
favoriteRouter.get("/",getAllFavorite)
favoriteRouter.delete("/:id",deleteFavorite)

module.exports={
    favoriteRouter
}