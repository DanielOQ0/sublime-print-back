import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true},
        address: { type: String, required: true},
        country: { type: String, required: true},
        state: { type: String, required: true},
        city: { type: String, required: true},
        zip_code: { type: Number, required: true},
        contact_phone : { type: Number},
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const AddressUser = mongoose.model('address', schema)

export default AddressUser
