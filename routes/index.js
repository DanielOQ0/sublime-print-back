import express from 'express'
import userRouter from './users.js'
import categoryRouter from './categories.js'
import productRouter from './products.js'
import paymentsRouter from "./payments.js"
import cartRouter from './carts.js'
import fileRouter from './fileUpload.js'
import orderRouter from './order.js';
import addressUserRouter from './addressUser.js'




let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {res.render('index', { title: 'Express' });});

router.use('/users',userRouter)
router.use('/categories', categoryRouter)
router.use('/products', productRouter)
router.use('/payments', paymentsRouter)
router.use('/cart', cartRouter)
router.use('/file-upload', fileRouter)
router.use('/orders', orderRouter);
router.use('/address-user', addressUserRouter)

export default router