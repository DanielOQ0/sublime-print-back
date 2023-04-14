import Order from '../models/Order.js'

const orderController = {

  create: async (req, res, next) => {
    try {
      let order = await Order.create(req.body)
      return res 
        .status(201)
        .json({
          message: 'Order successfully created',
          order
        })
    } catch (error) {
      next(error)
    }
  },

  getAll: async (req, res, next) => {
    try {
      let orders = await Order.find()
      return res
        .status(200)
        .json({
          orders
        })
    } catch (error) {
      next(error)
    }
  },

  getOne: async (req, res, next) => {
    try {
      let order = await Order.findById(req.params.id)
      if (order) {
        return res
          .status(200)
          .json({
            order
          })
      }
    } catch (error) {
      next(error)
    }
  },

  update: async (req, res, next) => {
    try {
      let order = await Order.findByIdAndUpdate(
        req.params.id,
        req.body
      )
      if (order) {
        return res
          .status(200)
          .json({
            message: 'Order Successfully Updated',
          })
      }
    } catch (error) {
      console.log(error);
      next(error)
    }
  },

  destroy: async (req, res, next) => {
    try {
      await Order.findByIdAndDelete(req.params.id)
      return res 
        .status(200)
        .json({
          message: 'Order successfully Deleted'
        })
    } catch (error) {
      next(error)
    }
  },

  getByCustomerId: async (req, res, next) => {
    try {
      let orders = await Order.find({ customerId: req.params.id })
      return res
        .status(200)
        .json({
          orders
        })
    } catch (error) {
      next(error)
    }
  }
}

export default orderController
