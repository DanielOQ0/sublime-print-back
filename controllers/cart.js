import Cart from '../models/Cart.js'


const controller = {

    create: async (req,res,next) => {
        const { user } = req 
        try {
            let cart = await Cart.create({
                cantidad: 1,
                product_id: req.params.id,
                user_id: user._id,
                color: req.body.color,
                size: req.body.size,
                })   
            return res
                .status(201)
                .json({
                    message: 'Cart successfully created',
                    cart
                })
        } catch (error) {
            next(error)
        }
    },

    getAll: async (req,res,next) => {
        const { user } = req 
        try {
            let cart = await Cart.find( { user_id: user._id })
                .populate("product_id")
            return res
                .status(200)
                .json({
                    cart
                })
        } catch (error) {
            next(error)
        }
    },

    update: async (req,res,next) => {
        try {
            let product = await Cart.findByIdAndUpdate(
                req.params.id,
                { cantidad: req.body.cantidad}
                )
            if (product){
                return res 
                    .status(200)
                    .json({
                        message: 'Cantidad fue actualizada',
                    })
            }
        } catch (error) {
            next(error)
        }
    },

    destroyOne: async (req,res,next) => {
        try {
            let item = await Cart.deleteOne( {_id: req.params.id})
            if( item ){
                return res
                    .status(200)
                    .json({
                        message:'Item successfully deleted'
                    })
            }
        } catch (error) {
            next(error)
        }
    },

    destroyAll: async (req,res,next) => {
        const { user } = req
        try {
            await Cart.deleteMany( { user_id: user._id})
            return res
                .status(200)
                .json({
                    message: 'Cart successfully deleted'
                })
        } catch (error) {
            next(error)
        }
    }
}

export default controller