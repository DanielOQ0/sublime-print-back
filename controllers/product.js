import Product from '../models/Product.js'
import AWS from 'aws-sdk'
import config from '../config/uploadFile.js'

const spacesEndpoint = new AWS.Endpoint(config.Enpoint)
const s3 = new AWS.S3({ endpoint: spacesEndpoint})

const controller = {

    create: async (req,res,next) => {

        const { file } = req.files
        try {
            await s3.putObject({
                ACL: 'public-read',
                Bucket: config.BucketName,
                Body: file.data,
                Key: req.body.key
            }).promise()

            const urlPhoto = `https://${config.BucketName}.${config.Enpoint}/${req.body.key}`
            let product = await Product.create({
                name: req.body.name,
                description: req.body.description,
                image: urlPhoto,
                price: req.body.price,
                stock: req.body.stock,
                sizes: req.body.sizes,
                rating: req.body.rating,
                reviewCount: req.body.reviewCount,
                colors: req.body.colors,
                category_id: req.params.id,
                key: req.body.key,
                is_custom: false,
            })
            if ( product ){
                return res 
                    .status(201)
                    .json({
                        message: 'Product Successfully Created',
                        product
                    })
            }
        } catch (error) {
            console.log(error)
            next(error)
        }
    },

    createCustom: async (req,res,next) => {
        try {

            let product = await Product.create({
                name: "Custom Shirt",
                description: "Made by "+req.user.name,
                image: req.body.url,
                price: req.body.price,
                stock: req.body.stock,
                sizes: req.body.sizes,
                colors: req.body.colors,
                category_id: req.params.id,
                is_custom: true,
                user_id : req.user._id,
            })
            if ( product ){
                return res 
                    .status(201)
                    .json({
                        message: 'Product Successfully Created',
                        product
                    })
            }
        } catch (error) {
            console.log(error)
            next(error)
        }
    },

    getAll: async ( req ,res, next ) => {

        let consultas = {is_custom:false};
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
            let count = await Product.find(consultas).countDocuments()
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