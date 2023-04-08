import User from '../../models/Users.js'

async function accountExistsSignUp(req,res,next) {
    const user = await User.findOne({email: req.body.email})
    if (user) {
        return res.status(400).json({
            succes:false,
            message:'user already exist!'})
    }
    return next()
}

export default accountExistsSignUp