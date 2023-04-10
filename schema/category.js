import Joi from "joi";

const schema = Joi.object({

    name: Joi
        .string()
        .required()
        .min(3)
        .max(25)
        .message({
            'string.empty':'Name is required',
            'string.min':'Name must be at least 3 characters',
            'string.max': 'Name must be 25 characters long max',
            'any.required': 'Name is required'
        }),
    
    description: Joi
        .string()
        .required()
        .min(15)
        .max(100)
        .message({
            'string.empty':'Description is required',
            'string.min':'Description must be at least 15 characters',
            'string.max': 'Description must be 100 characters long max',
            'any.required': 'Description is required'
        })

})

export default schema