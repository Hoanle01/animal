
const { User } = require("../../models")
const bcryptjs = require('bcryptjs')
const jwt = require("jsonwebtoken");
const gravatarUrl=require('gravatar-url')



const register = async (req, res) => {
    const { name, email, password, numberPhone} = req.body
    try {
        //tạo avatar mặc định
        const avatarUrl=gravatarUrl(email)


        //taọ ra 1 chuỗi ngẫu nhiên
        const salt = bcryptjs.genSaltSync(10)

        //mã hóa salt+password
        const hashPassword = bcryptjs.hashSync(password, salt)
        const newUsers = await User.create({
            name, email, password: hashPassword, numberPhone,avatar:avatarUrl
        })
        res.status(201).send(newUsers)
    } catch (error) {

        res.status(500).send(error)
        console.log(error)
    }
}
const login = async (req, res) => {
    const { email, password } = req.body
    //tìm ra user đăng nhập dưạ trên email
    const user = await User.findOne({
        where: {
            email
        }
    })
    if (user) {
       
       
        
        //kiểm tra mật khẩu có đúng hay không 
        const isAuth = bcryptjs.compareSync(password, user.password)
        if (isAuth) {
            const token = jwt.sign({ email: user.email, type: user.type }, "hoang29", { expiresIn: 180 * 60 })

            res.status(200).send({ message: "Đăng nhập thành công ", token ,id:user.id,name:user.name})

        } else {
            res.status(500).send({ message: "Tài khoản hoặc mật khẩu không đúng " })

        }
    } else {
        res.status(404).send({ message: "không tìm thấy email phù hợp " })

    }


}
const  uploadAvatar = async (req, res) => {
    const {name}=req.body

     const { file } = req

    const urlImage = `http://localhost:3000/${file.path}`
    const { user } = req
    const userFound = await User.findOne({
        email: user.email
    })
    userFound.avatar=urlImage
    await userFound.save()
     res.send(userFound)
}
module.exports = {
    register,
    login,
    uploadAvatar
}