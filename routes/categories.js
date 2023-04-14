import express from 'express'
import controllers from '../controllers/category.js'
import validator from '../middlewares/validator.js'
import schema from '../schema/category.js'
import categoryExists from '../middlewares/categoryExists.js'
import category_update from '../schema/categoryUpdate.js'
import passport from '../middlewares/users/passport.js'

const { create, getAll, getOne, update, destroy } = controllers

const router = express.Router()

router.get('/',passport.authenticate('jwt',{ session: false}), getAll)
router.get('/:id',passport.authenticate('jwt',{ session: false}), getOne)
router.post('/',passport.authenticate('jwt',{ session: false}), validator(schema), categoryExists, create) 
router.put('/:id',passport.authenticate('jwt',{ session: false}), validator(category_update), categoryExists, update )
router.delete('/:id',passport.authenticate('jwt',{ session: false}), destroy )

export default router