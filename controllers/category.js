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
    }

}

export default controller