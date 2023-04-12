import express from 'express'
import controller from '../controllers/cart.js'
import passport from '../middlewares/users/passport.js'
import validator from '../middlewares/validator.js'
import cart_update from '../schema/cartUpdate.js'

const { create, getAll, update, destroyOne, destroyAll } = controller

const router = express.Router()

router.post('/:id', passport.authenticate('jwt',{ session: false}), create)
router.get('/', passport.authenticate('jwt',{ session: false}), getAll)
router.put('/:id', passport.authenticate('jwt',{ session: false}), validator(cart_update), update )
router.delete('/delete-one/:id', passport.authenticate('jwt', { session: false}), destroyOne )
router.delete('/', passport.authenticate('jwt', { session: false}), destroyAll )


export default router