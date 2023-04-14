import Category from '../models/Category.js'

const controller = {

    create: async (req,res,next) => {
        try {
            let category = await Category.create(req.body)
            return res 
                .status(201)
                .json({
                    message: 'Category successfully created',
                    category
                })
        } catch (error) {
            next(error)
        }
    },

    getAll: async (req,res,next) => {
        try {
            let categories =  await Category.find()
            return res
                .status(200)
                .json({
                    Categories: categories 
                })
        } catch (error) {
            next(error)
        }
    },

    getOne: async (req,res,next) => {
        try {
            let category = await Category.findById( req.params.id )
            if ( category ){
                return res
                    .status(200)
                    .json({
                        category
                    })
            }
        } catch (error) {
            next(error)
        }
    },

    update: async (req,res,next) => {
        try {
            let category = await Category.findByIdAndUpdate(
                req.params.id,
                req.body
            )
            if ( category ){
                return res  
                    .status(200)
                    .json({
                        message: 'Category Successfully Updated',
                    })
            }
        } catch (error) {
            console.log(error);
            next(error)
        }
    },

    destroy: async (req,res,next) => {
        try {
            await Category.findByIdAndDelete( req.params.id )
                return res 
                    .status(200)
                    .json({
                        message: 'Category successfully Deleted'
                    })
        } catch (error) {
            next(error)
        }
    }

}

export default controller