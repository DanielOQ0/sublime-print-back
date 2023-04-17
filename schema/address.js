import Joi  from 'joi'

const schema = Joi.object({

    address: Joi
        .string()
        .required()
        .min(10)
        .message({
            'string.min':'Address must be at least 10 characters',
            'any.required': 'Address is required'
        }),

    country: Joi
        .string()
        .required()
        .min(4)
        .message({
            'string.min':'Country must be at least 4 characters',
            'any.required': 'Country is required'
        }),

    state: Joi
        .string()
        .required()
        .min(4)
        .message({
            'string.min':'State must be at least 4 characters',
            'any.required': 'State is required'
        }),
    
    city: Joi
        .string()
        .required()
        .min(4)
        .message({
            'string.min':'City must be at least 4 characters',
            'any.required': 'City is required'
        }),

    zip_code: Joi
        .number()
        .required()
        .min(7)
        .message({
            'string.min':'Zip_code must be at least 6 characters',
            'any.required': 'Zip_code is required'
        }),
    
    contact_phone: Joi
        .number()
        .required()
        .min(10)
        .message({
            'string.min':'Contact-Phone must be at least 10 characters',
            'any.required': 'Contact-Phone is required'
        }),
    

})

export default schema