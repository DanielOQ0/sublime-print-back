import mongoose from 'mongoose'

const schema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true }
    },{
        timestamps: true,
        versionKey: false
    }
)

const Category = mongoose.model('categories', schema)

export default Category