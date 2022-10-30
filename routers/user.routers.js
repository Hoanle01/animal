const express=require("express")
const {  register, login ,uploadAvatar} = require("../controllers/Addmin/user.controller")
const { authenticate } = require("../middlewares/auth/authenticate")
const { uploadImage } = require("../middlewares/upload/upload-image")
const { checkExitsEmail } = require("../middlewares/validation/checkExit")


const userRouter=express.Router()

userRouter.post("/register",checkExitsEmail,register)
userRouter.post("/login",login)



userRouter.post('/upload-avatar',authenticate,uploadImage("avatar"),uploadAvatar)

module.exports={
    userRouter
}
