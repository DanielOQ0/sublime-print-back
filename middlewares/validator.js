
const validator = (schema) => [
    (req,res,netx) => {
        const validation = schema.validate(req.boy, { abortEarly: true})
        if (validation.error){
            return res
                .status(400)
                .json({
                    success: false,
                    message: validation.error.details.map(error => error.message)
                })
        }
        return netx()
    }

]

export default validator