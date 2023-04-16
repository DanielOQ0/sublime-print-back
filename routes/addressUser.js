import express from 'express'
import controller from '../controllers/addressUser.js'
import passport from '../middlewares/users/passport.js'
import validator from '../middlewares/validator.js'
import schema from '../schema/address.js'

const { create, getAll, getOne } = controller

const router = express.Router()

router.post('/', passport.authenticate('jwt', { session: false}), validator(schema), create)
router.get('/', passport.authenticate('jwt', { session: false}), getAll)
router.get('/:id', passport.authenticate('jwt', { session: false}), getOne)


export default router