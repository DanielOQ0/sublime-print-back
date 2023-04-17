import mongoose from 'mongoose'

const schema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        image: { type: String, required: false },
        price: { type: Number, required: true },
        stock: { type: Number, required: true },
        sizes: { type: Array, required: true },
        rating: {type:Number, required: false},
        reviewCount: {type:Number, required: false},
        colors: { type: Array, required: false },
        category_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: false }, //  permite la selección de varias categorías al crear o actualizar un producto
        is_custom: { type: Boolean}
        },{
        timestamps: true,
        versionKey: false
    }
)

const Product = mongoose.model('Product',schema)

export default Product




// import mongoose from 'mongoose'

// const sizeSchema = new mongoose.Schema({
//   value: { type: String, required: true },
//   inStock: { type: Boolean, required: true }
// });

// const schema = new mongoose.Schema(
//     {
//         name: { type: String, required: true },
//         description: { type: String, required: true },
//         image: { type: String, required: false },
//         price: { type: Number, required: true },
//         stock: { type: Number, required: true },
//         sizes: [sizeSchema], // Usar el esquema definido para el array de objetos
//         rating: {type: Number, required: false},
//         reviewCount: {type: Number, required: false},
//         colors: { type: Array, required: false },
//         category_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: false },
//         is_custom: { type: Boolean }
//     },
//     {
//         timestamps: true,
//         versionKey: false
//     }
// );

// const Product = mongoose.model('Product', schema);

// export default Product;

