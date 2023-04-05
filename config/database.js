import mongoose from "mongoose";

mongoose.set('strictQuery', false)

mongoose.connect(process.env.MONGO)
    .then( () => console.log('Database Conectec!!!'))
    .catch( error => console.log(error))