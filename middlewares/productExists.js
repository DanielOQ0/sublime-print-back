import Product from "../models/Product.js"


async function productExists(req,res,next){

    let category = await Product.findOne( { name: req.body.name} )
    if ( category ){
        return res 
            .status(400)
            .json({
                message: 'Product Already Exists'
            })
    }
    return next()
}

export default productExists