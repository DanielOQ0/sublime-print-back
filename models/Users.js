import mongoose from 'mongoose'

const schema = new mongoose.Schema(
{
    name: { type: String, required: true},
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: String },
    photo: { type: String },
    is_online: { type: Boolean, required: true },
    is_admin: { type: Boolean, required: true },
    is_verified: { type: Boolean, required: true },
    verify_code: { type: String, required: true }
},{
timestamps: true
}
)

const User = mongoose.model('Users',schema)

export default User