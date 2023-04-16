import Joi  from 'joi'

const schema = Joi.object({

    address: Joi
        .string()
        .min(10)
        .message({
            'string.min':'Address must be at least 10 characters',
        }),

    country: Joi
        .string()
        .min(4)
        .message({
            'string.min':'Country must be at least 4 characters',
        }),

    state: Joi
        .string()
        .min(4)
        .message({
            'string.min':'State must be at least 4 characters',
        }),
    
    city: Joi
        .string()
        .min(4)
        .message({
            'string.min':'City must be at least 4 characters',
        }),

    zip_code: Joi
        .number()
        .min(7)
        .message({
            'string.min':'Zip_code must be at least 6 characters',
        }),
    
    contact_phone: Joi
        .number()
        .min(10)
        .message({
            'string.min':'Contact-Phone must be at least 10 characters',
        }),
    

})

export default schema