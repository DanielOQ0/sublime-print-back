import User from "../models/Users.js";

async function accountExists(req,res,next) {

    const user = await User.findOne( { email: req.body.email})
    if ( user ){
        return res
            .status(400)
            .json({
                message: 'User Already Exists!!'
            })
    }
    return next()
}

export default accountExists