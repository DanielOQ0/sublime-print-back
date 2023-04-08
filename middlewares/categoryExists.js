import Category from '../models/Category.js'

async function nameExists(req,res,next){

    let category = await Category.findOne( { name: req.body.name} )
    if ( category ){
        return res 
            .status(400)
            .json({
                message: 'Category Already Exists'
            })
    }
    return next()
}

export default nameExists