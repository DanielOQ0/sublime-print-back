import express from 'express'
import controllers from '../controllers/category.js'
import validator from '../middlewares/validator.js'
import schema from '../schema/category.js'
import categoryExists from '../middlewares/categoryExists.js'
import category_update from '../schema/categoryUpdate.js'

const { create, getAll, getOne, update, destroy } = controllers

const router = express.Router()

router.get('/', getAll)
router.get('/:id', getOne)
router.post('/', validator(schema), categoryExists, create) 
router.put('/:id', validator(category_update), categoryExists, update )
router.delete('/:id', destroy )

export default router