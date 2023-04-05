import userRouter from './users.js'
import express from 'express'

let router = express.Router()


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Running Server');
});

router.use('/auth', userRouter)

export default router

