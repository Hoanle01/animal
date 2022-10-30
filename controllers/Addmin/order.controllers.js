
const { Order, User } = require('../../models')

const cretaeOrders = async (req, res) => {

    const { address, numberPhonne, status_order, date_receipt, date_delivery, date_order, name } = req.body
    console.log(name)
    try {
        const newOrders = await Order.create({ address, numberPhonne, status_order, date_receipt, date_delivery, date_order, name })
        res.status(201).send(newOrders)


    } catch (error) {
        res.status(500).send(error)
    }

}
const getAllOrder = async (req, res) => {
    //láy sau giấu ?
    const { name } = req.query
    try {
        if (name) {
            const OrderList = await Order.findAll({
                where: {
                    name: {
                        [Op.like]: `%${name}%`
                    }
                }
            })
            res.status(200).send(OrderList)


        } else {
            const OrderList = await Order.findAll()
            res.status(200).send(OrderList)
        }

    } catch (error) {
        res.status(500).send(error)
    }
}
const getDetailOrder = async (req, res) => {
    const { id } = req.params;
    try {
        const detailOrder = await Order.findOne({
            where: {
                id
            }
        })
        res.status(200).send(detailOrder)

    } catch (error) {
        res.status(500).send(error)

    }
}
const updateOrderAssignment = async (req, res) => {
    const { id } = req.params
    const { index_shipper } = req.body
    const isShipper = await User.findOne({
        where: {
            id: index_shipper,
            type: "shipper"
        }
    })
    if (isShipper) {
        try {
            const detailOrder = await Order.findOne({
                where: {
                    id
                }
            })

            detailOrder.status_order = "Đang Giao"

            await detailOrder.save()
            res.status(200).send(detailOrder)

        } catch (error) {
            res.status(500).send(error)


        }


    }
    else {
        res.status(202).send("Hiện tại chưa có shipper")
    }

}
const updateOrderSuccess=async (req,res)=>{
    const {id}=req.params
    try {
        const detailOrder = await Order.findOne({
            where: {
                id
            }
        })
        if(detailOrder){
            detailOrder.status_order = "Hoàn Thành"
            


        }

       

        await detailOrder.save()
        res.status(200).send(detailOrder)

    } catch (error) {
        res.status(500).send(error)


    }
}
const updateOrderCancel=async (req,res)=>{
    const {id}=req.params
    try {
        const detailOrder = await Order.findOne({
            where: {
                id
            }
        })

        detailOrder.status_order = "Đã bị hủy"

        await detailOrder.save()
        res.status(200).send(detailOrder)

    } catch (error) {
        res.status(500).send(error)


    }
}


const deleteOrder = async (req, res) => {
    const { id } = req.params
    try {
        await Order.destroy({
            where: {
                id
            }
        })
        res.status(200).send("xóa thành công")
    } catch ({ error }) {
        res.status(500).send(error)

    }
}
module.exports = {
    cretaeOrders,
    getAllOrder,
    getDetailOrder,
    updateOrderAssignment,
    deleteOrder
}