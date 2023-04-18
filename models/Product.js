import mongoose from 'mongoose'

const schema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        image: { type: String, required: false },
        price: { type: Number, required: true },
        stock: { type: Number, required: true },
        sizes: { type: Array, required: false },
        rating: {type:Number, required: false},
        reviewCount: {type:Number, required: false},
        colors: { type: Array, required: false },
        category_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: false }, //  permite la selección de varias categorías al crear o actualizar un producto
        is_custom: { type: Boolean},
        user_id: { type: mongoose.Schema.Types.ObjectId ,ref: 'User', required: false },
        },{
        timestamps: true,
        versionKey: false
    }
)

const Product = mongoose.model('Product',schema)

export default Product