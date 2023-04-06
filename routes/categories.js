import express from 'express'
import validator from '../middlewares/validator.js'
import schema from '../schema/category.js'
import controller from '../controllers/category.js'

const { create } = controller


let router = express.Router()

router.post('/', validator(schema), create)


export default router