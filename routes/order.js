import express from 'express'
import orderController from '../controllers/orderController.js'
import passport from '../middlewares/users/passport.js'

const router = express.Router()

router.post('/',passport.authenticate('jwt',{ session: false}), orderController.create)
router.get('/', passport.authenticate('jwt',{ session: false}), orderController.getAll)
router.get('/:id',passport.authenticate('jwt',{ session: false}), orderController.getOne)
router.put('/:id', passport.authenticate('jwt',{ session: false}), orderController.update)
router.delete('/:id',passport.authenticate('jwt',{ session: false}), orderController.destroy)
router.get('/customer/:id',passport.authenticate('jwt',{ session: false}), orderController.getByCustomerId)

export default router
