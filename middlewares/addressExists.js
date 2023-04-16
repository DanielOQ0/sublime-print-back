import AddressUser from "../models/AddressUser.js";

async function addressExists(req,res,next) {

    let address = await AddressUser.findOne({ address: req.body.address})
    if ( address ){
        return res
            .status(400)
            .json({
                message: 'Address Already Exists!!'
            })
    }
    return next()
}

export default addressExists