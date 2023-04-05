import mongoose from "mongoose";

mongoose.set('strictQuery', false)

mongoose.connect(process.env.MONGO)
    .then( () => console.log('Database Conected'))
    .catch( error => console.log(error))