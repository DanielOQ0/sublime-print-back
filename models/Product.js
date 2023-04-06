import mongoose from 'mongoose'

const schema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        stock: { type: Number, required: true }, // cantidad del producto disponible
        categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }] //  permite la selección de varias categorías al crear o actualizar un producto
        },{
        timestamps: true
    }
)

const Product = mongoose.model('Product',schema)

export default Product