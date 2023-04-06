import 'dotenv/config.js'
import '../../config/database.js'
import { users } from './users.js'
import User from '../Users.js'

let newUsers = async(users) => await User.insertMany(users)

let data = async () => {
    await newUsers(users)
    console.log('done!')
}

data()
