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
        let consultas = {};
        let sort = {};
        let pagination = {
            page: 1,
            limit: 6,
        };
        //filtro title
        if (req.query.title) {
            consultas.title = new RegExp(req.query.title.trim(), "i");
          }
        ///filtros sort
        if(req.query.sort){
            switch (req.query.sort) {
                case "rating":
                    sort = {}
                    sort.rating = -1
                break;

                case "newest":
                    sort = {}
                    sort.createdAt = -1
                break;

                case "high":
                    sort = {}
                    sort.price = -1
                break;

                case "low":
                    sort = {}
                    sort.price = 1
                break;

                default:
                    break;
            }
            console.log(sort);
        }
        //filtro category 
        if (req.query.category) {
            consultas.category_id = req.query.category.split(",");
        }
        //paginacion y limites
        if (req.query.page) {
            pagination.page = req.query.page;
        }
        if (req.query.quantity) {
            pagination.limit = req.query.quantity;
        }
        try {
            let count = await Product.countDocuments()
            let products = await Product.find(consultas)
            .skip(pagination.page > 0 ? (pagination.page - 1) * pagination.limit : 0)
            .limit(pagination.limit > 0 ? pagination.limit : 0)
            .sort(sort)
            if ( products.length > 0 ){
                return res
                    .status(200)
                    .json({
                        products: products,
                        count:count
                    })
            }else {
                return res.status(404).json({ message: "Not more products" });
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