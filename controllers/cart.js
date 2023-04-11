import Cart from '../models/Cart.js'

const controller = {

    create: async (req,res,next) => {
        const { user } = req
        try {
            let cart = await Cart.create({
                cantidad: 1,
                product_id: req.params.id,
                user_id: user._id
                })   
            return res
                .status(201)
                .json({
                    message: 'Cart successfully created',
                    cart
                })
        } catch (error) {
            console.log(error)
            next(error)
        }


    }

}

export default controller