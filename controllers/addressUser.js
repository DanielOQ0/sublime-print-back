import AddressUser from '../models/AddressUser.js'

const controller = {

    create: async (req,res,next) => {

        const {user} = req
        req.body.user_id = user._id
        try {
            let address = await AddressUser.create(req.body)
            return res
                .status(201)
                .json({
                    message: 'Address Successfully Created',
                    address
                })
        } catch (error) {
            next(error)
        }
    },

    getAll: async (req,res,next) => {
        const { user } = req
        try {
            let address = await AddressUser.find({ user_id: user._id})
            return res 
                .status(200)
                .json({
                    address
                })
        } catch (error) {
            next(error)
        }
    },

    getOne: async (req,res,next) => {
        try {
            let address = await AddressUser.findById(req.params.id)
            if ( address ){
                return res
                    .status(200)
                    .json({
                        address
                    })
            }   
        } catch (error) {
            next(error)
        }
    }

}

export default controller