import FileUploap from "../models/FileUpload.js";

async function fileExists(req,res,next){

    let file = await FileUploap.findOne( { key: req.body.key})
    if ( file ){
        return res
            .status(400)
            .json({
                message: 'File Already Exists!!'
            })
    }
    return next()
}

export default fileExists