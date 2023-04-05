import mongoose from 'mongoose'

const schema = new mongoose.Schema(
{
name: { type: String, required: true},
email: { type: String, required: true },
password: { type: String, required: true },
phone: { type: String, required: true },
address: {
street: { type: String, required: true },
city: { type: String, required: true },
state: { type: String, required: true },
zip: { type: String, required: true }
},
// payment: { // Esto lo puse por si queremos agregar la funcionalidad del pago con tarjeta ademas de lo de mercado
// card_number: { type: String, required: true },
// card_expiry: { type: String, required: true },
// card_cvv: { type: String, required: true }
// },
photo: { type: String, required: true },
orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }], // registro de  pedidos que el usuario ha realizado.
is_online: { type: Boolean, required: true },
is_admin: { type: Boolean, required: true },
is_verified: { type: Boolean, required: false },
verify_code: { type: String, required: true }
},{
timestamps: true
}
)

const User = mongoose.model('User',schema)

export default User