import Joi from "joi";

const schema = Joi.object({

    name: Joi
        .string()
        .min(3)
        .max(25)
        .message({
            'string.empty':'Name is required',
            'string.min':'Name must be at least 4 characters',
            'string.max': 'Name must be 25 characters long max',
            'any.required': 'Name is required'
        }),

    email: Joi
        .string()
        .min(8)
        .email({ minDomainSegments: 2 })
        .message({
            'string.empty':'An email is required',
            'string.min':'email must be at least 8 characters',
            'any.required': 'An email is required',
            'string.email' : 'A valid email is necessary'
        }),
    
    password: Joi
        .string()
        .min(8)
        .max(25)
        .message({
            'string.min': 'The password must be at least 8 characters',
            'string.max': 'The password cannot exceed 25 characters',
            'string.empty': 'The password cannot be empty',
            'any.required': 'A password is required'
        }),

    file: Joi
        .any()
})

export default schema