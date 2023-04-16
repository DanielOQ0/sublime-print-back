import Joi from "joi";
// import BaseJoi from 'joi'
// import { Extension } from "joi-filesize-extensions";

// const Joi = BaseJoi.extend(Extension)

const schema = Joi.object({

    name: Joi
        .string()
        .required()
        .min(4)
        .max(25)
        .message({
            'string.empty':'Name is required',
            'string.min':'Name must be at least 4 characters',
            'string.max': 'Name must be 25 characters long max',
            'any.required': 'Name is required'
        }),
    
    key: Joi
        .string()
        .required()
        .min(4)
        .max(25)
        .message({
            'string.empty':'Key is required',
            'string.min':'Key must be at least 4 characters',
            'string.max': 'Key must be 25 characters long max',
            'any.required': 'Key is required'
        }),

    description: Joi
        .string()
        .min(15)
        .max(50)
        .message({
            'string.empty':'Description is required',
            'string.min':'Description must be at least 15 characters',
            'string.max': 'Description must be 50 characters long max',
            'any.required': 'Description is required'
        }),

    // image: Joi
    //     .validate('2 MG', Joi.number().filesize()).value,
    
    price: Joi
        .number()
        .required()
        .min(0)
        .positive()
        .message({
            'any.required': 'Price is required',
            'number.empty': 'Price is required',
            'number.min': 'Price must be more than 0',
            'number.positive': 'Price must be a positive number',
        }),
    
    stock: Joi
        .number()
        .required()
        .min(0)
        .positive()
        .message({
            'any.required': 'Stock is required',
            'number.empty': 'Stock is required',
            'number.min': 'Stock must be more than 0',
            'number.positive': 'Stock must be a positive number',
        }),


})

export default schema