import User from '../../models/Users.js'

async function accountExistsSignIn(req, res, next) {
    const user = await User.findOne({ email: req.body.email })
    if (user) {
        req.user = {
            id: user._id,
            email: user.email,
            photo: user.photo,
            password: user.password,
            phone: user.phone,
            is_online: user.is_online,
            is_admin: user.is_admin,
            is_verified: user.is_verified,
            verify_code: user.verify_code,
        }
        return next()
    }
    return res.status(400).json({
        succes: false,
        message: 'Wrong credentials!'
    })
}

export default accountExistsSignIn