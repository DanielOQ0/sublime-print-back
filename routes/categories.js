import express from 'express'
import controllers from '../controllers/category.js'
import validator from '../middlewares/validator.js'
import schema from '../schema/category.js'
import nameExists from '../middlewares/nameExists.js'
import category_update from '../schema/categoryUpdate.js'

const { create, getAll, getOne, update, destroy } = controllers

const router = express.Router()

router.get('/', getAll)
router.get('/:id', getOne)
router.post('/', validator(schema), nameExists, create) 
router.put('/:id', validator(category_update), nameExists, update )
router.delete('/:id', destroy )

export default router