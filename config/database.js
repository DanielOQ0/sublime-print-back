import mongoose from "mongoose"

mongoose.set('strictQuery', false)

mongoose.connect(process.env.MONGO_LINK)
    .then( () => console.log('Database Connectec!!!'))
    .catch( error => console.log(error,process.env.MONGO_LINK))