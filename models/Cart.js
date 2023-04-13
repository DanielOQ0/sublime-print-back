import mongoose from 'mongoose'

const schema = new mongoose.Schema(
    {
        cantidad: { type: String, required: true },
        user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    },
    {
        timestamps: true,
        versionKey: false
    }

)

const Cart = mongoose.model('carts', schema)

export default Cart