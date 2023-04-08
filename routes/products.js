import express from 'express'
import controller from   '../controllers/product.js'
import validator from '../middlewares/validator.js'
import schema from '../schema/products.js'
import productExists from    '../middlewares/productExists.js'
import product_upddate from '../schema/productUpdate.js'

const { create, getAll, getOne, update, destroy } = controller

let router = express.Router()

router.post('/', validator(schema), productExists, create)
router.get('/', getAll)
router.get('/:id', getOne )
router.put('/:id', validator(product_upddate), productExists, update)
router.delete('/:id', destroy)

export default router