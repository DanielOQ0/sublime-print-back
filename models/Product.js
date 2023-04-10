import mongoose from 'mongoose'

const schema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        image: { type: String, required: false },
        price: { type: Number, required: true },
        stock: { type: Number, required: true },
        size: { type: Array, required: false },
        color: { type: Array, required: false },
        category_id: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }] //  permite la selección de varias categorías al crear o actualizar un producto
        },{
        timestamps: true
    }
)

const Product = mongoose.model('Product',schema)

export default Product