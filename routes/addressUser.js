import express from 'express'
import controller from '../controllers/addressUser.js'
import passport from '../middlewares/users/passport.js'
import validator from '../middlewares/validator.js'
import schema from '../schema/address.js'
import update_address from '../schema/addressUpdate.js'

const { create, getAll, getOne, update, destroyOne } = controller

const router = express.Router()

router.post('/', passport.authenticate('jwt', { session: false}), validator(schema), create)
router.get('/', passport.authenticate('jwt', { session: false}), getAll)
router.get('/:id', passport.authenticate('jwt', { session: false}), getOne)
router.put('/:id', passport.authenticate('jwt', { session: false}), validator(update_address), update)
router.delete('/:id', passport.authenticate('jwt', { session: false}), destroyOne)


export default router