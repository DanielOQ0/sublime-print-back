import 'dotenv/config.js'
import '../../config/database.js'
import { users } from './users.js'
import User from '../Users.js'
import Product from '../Product.js'
import {products} from './products.js'

//let newUsers = async(users) => await User.insertMany(users)

let newProducts = async(products) => await Product.insertMany(products)

let data = async () => {
    //await newUsers(users)
    await newProducts(products)
    console.log('done!')
}

data()
