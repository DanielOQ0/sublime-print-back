import express from 'express'
import userRouter from './users.js'
import categoryRouter from './categories.js'



let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {res.render('index', { title: 'Express' });});

router.use('/users',userRouter)
router.use('/categories', categoryRouter)


export default router