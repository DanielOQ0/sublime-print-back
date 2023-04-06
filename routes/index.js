import express from 'express'
import userRouter from './auth.js'
import categoriesRouter from './categories.js'



let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {res.render('index', { title: 'Express' });});

router.use('/auth',userRouter)
router.use('/categories', categoriesRouter)

export default router