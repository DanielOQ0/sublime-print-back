import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        title: { type: String},
        key: { type: String},
        url: { type: String, required: true}
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const FileUploap = mongoose.model('filesupload', schema)

export default FileUploap