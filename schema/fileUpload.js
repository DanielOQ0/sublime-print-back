import Joi from 'joi'

const schema = Joi.object({
    
    key: Joi
        .string()
        .required()
        .min(3)
        .message({
            'string.empty':'Key is required',
            'string.min':'Key must be at least 3 characters',
            'any.required': 'Key is required'
        }),
    
    title: Joi
        .string()
        .required()
        .min(3)
        .message({
            'string.empty':'Title is required',
            'string.min':'Title must be at least 3 characters',
            'any.required': 'Title is required'
        })

})

export default schema