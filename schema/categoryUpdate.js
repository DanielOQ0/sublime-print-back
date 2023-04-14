import Joi from "joi";

const schema = Joi.object({

    name: Joi
        .string()
        .required()
        .min(4)
        .max(25)
        .message({
            'string.empty':'jajajajaja',
            'string.min':'Name must be at least 4 characters',
            'string.max': 'Name must be 25 characters long max',
            'any.required': 'jajajajajajaja'
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
        })

})

export default schema