import Product from '../models/Product.js'



const controller = {

    create: async (req,res,next) => {
        try {
            let product = await Product.create( req.body )
            if ( product ){
                return res 
                    .status(201)
                    .json({
                        message: 'Product Successfully Created',
                        product
                    })
            }
        } catch (error) {
            next(error)
        }
    },

    getAll: async ( req ,res, next ) => {
        try {
            let products = await Product.find()
            if ( products ){
                return res
                    .status(200)
                    .json({
                        products
                    })
            }
        } catch (error) {
            next(error)
        }
    },

    getOne: async (req,res,next) => {
        try {
            let product = await Product.findById( req.params.id )
            if ( product ){
                return res 
                    .status(200)
                    .json({
                        product
                    })
            }
        } catch (error) {
            next(error)
        }
    },

    update: async (req,res,next) => {
        try {
            let product = await Product.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true}
            )
            if (product ){
                return res  
                    .status(200)
                    .json({
                        message: 'Product Successfully Updated',
                        product
                    })
            }
        } catch (error) {
            next(error)
        }
    },
    
    destroy: async (req,res,next) => {
        try {
            await Product.findByIdAndDelete( req.params.id )
            return res 
                .status(200)
                .json({
                    message: 'Product Successfully Deleted!!'
                })
        } catch (error) {
            next(error)
        }
    }
}

export default controller