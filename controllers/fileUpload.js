import FileUploap from '../models/FileUpload.js'
import AWS from 'aws-sdk'
import config from '../config/uploadFile.js'


const spacesEndpoint = new AWS.Endpoint(config.Enpoint)
const s3 = new AWS.S3({ endpoint: spacesEndpoint})

const controller = {
    
    upload: async (req,res,next) => {
        
        const { file } = req.files        
        try {
            await s3.putObject({
                ACL: 'public-read',
                Bucket: config.BucketName,
                Body: file.data,
                Key: file.name,
            }).promise()

            const urlFile = `https://${config.BucketName}.${config.Enpoint}/${file.name}`
            let fileupload = await FileUploap.create({
                url: urlFile,
                key: file.name,
                title: req.body.title
            })
            return res 
                .status(201)
                .json({
                message: 'File successfully uploaded',
                fileupload
                })
        } catch (error) {
            next(error)
        }

    }

}

export default controller