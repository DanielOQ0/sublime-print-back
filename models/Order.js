import mongoose from 'mongoose'

const schema = new mongoose.Schema(
{
user: { type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true },
products: [{
product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
quantity: { type: Number, required: true },
price: { type: Number, required: true }
}],
status: { type: String, required: true, default: 'Pending' }, //  indica el estado de una orden, un pago o una solicitud.
total_price: { type: Number, required: true },
shipping_address: { // almacena la direccion del pedido o entrega
street: { type: String, required: true },
city: { type: String, required: true },
state: { type: String, required: true },
zip: { type: String, required: true }
}
},{
timestamps: true
}
)

const Order = mongoose.model('Order',schema)

export default Order