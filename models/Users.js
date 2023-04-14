import mongoose from 'mongoose'

const schema = new mongoose.Schema(
{
    name: { type: String, required: false}, // si esta en true no anda signup
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: String },
    photo: { type: String },
    is_online: { type: Boolean, required: true },
    is_admin: { type: Boolean, required: true },
    is_verified: { type: Boolean, required: true },
    verify_code: { type: String, required: true }
},{
timestamps: true,
versionKey: false
}
)

const User = mongoose.model('Users',schema)

export default User