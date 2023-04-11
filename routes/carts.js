import express from 'express'
import controller from '../controllers/cart.js'
import passport from '../middlewares/users/passport.js'

const { create, getAll } = controller

const router = express.Router()

router.post('/:id', passport.authenticate('jwt',{ session: false}), create)
router.get('/', passport.authenticate('jwt',{ session: false}), getAll)


export default router