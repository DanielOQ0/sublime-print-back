async function accountHasBeenVerified(req,res,next) {
    if (req.users.is_verified) {
        return next()
    }
    	return res.status(400).json({
            succes: false,
            message:'has not been verified!'})
}

export default accountHasBeenVerified