import express from 'express'
import controller from   '../controllers/product.js'
import validator from '../middlewares/validator.js'
import schema from '../schema/products.js'
import productExists from    '../middlewares/productExists.js'
import product_upddate from '../schema/productUpdate.js'
import passport from '../middlewares/users/passport.js'
import fileExistis from '../middlewares/fileExists.js'


const { create, getAll, getOne, update, destroy } = controller

let router = express.Router()

router.post('/:id',passport.authenticate('jwt',{ session: false}), validator(schema), productExists, fileExistis, create)
router.get('/',passport.authenticate('jwt',{ session: false}), getAll)
router.get('/:id',passport.authenticate('jwt',{ session: false}), getOne )
router.put('/:id',passport.authenticate('jwt',{ session: false}), validator(product_upddate), productExists, update)
router.delete('/:id',passport.authenticate('jwt',{ session: false}), destroy)

export default router