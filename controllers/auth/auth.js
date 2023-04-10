import User from '../../models/Users.js'
import Crypto from 'crypto'
import bcryptjs from 'bcryptjs'
import jsonwebtoken from 'jsonwebtoken'
import nodemailer from 'nodemailer'
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

const controller = {
    sign_up: async (req, res, next) => {
        // Validar datos de entrada
        if (!req.body.email || !req.body.password) {
            return res.status(400).json({
                success: false,
                message: 'Email and password are required'
            })
        }

        try {
            // Generar código de verificación y hashear la contraseña
            const verify_code = Crypto.randomBytes(10).toString('hex')
            const password = bcryptjs.hashSync(req.body.password, 10)

            // Crear nuevo usuario
            await User.create({
                name: req.body.name,
                email: req.body.email,
                is_online: false,
                is_admin: false,
                is_verified: false,
                verify_code,
                password
            })

            // Enviar correo electrónico de verificación
            const message = {
                from: process.env.SMTP_USER,
                to: req.body.email,
                subject: 'Verifica tu cuenta',
                text: `Por favor, haz clic en el siguiente enlace para verificar tu cuenta: https://subime-print-fgbog.ondigitalocean.app/api/users/verify/${verify_code}`
            }
            transporter.sendMail(message)

            return res.status(200).json({
                success: true,
                message: 'User registered!'
            })
        } catch (error) {
            next(error)
        }
    },

    sign_in: async (req, res, next) => {
        try {
            let user = await User.findOneAndUpdate(
                { email: req.user.email }, //parametro de busqueda
                { is_online: true }, //parámetro a modificar
                { new: true } //para que devuelva el objeto modificado
            )
            user.password = null //para proteger la contraseña
            const token = jsonwebtoken.sign(
                { id: user._id },
                process.env.SECRET,
                { expiresIn: 60 * 60 * 48 }
            )
            return res.status(200).json({
                succes: true,
                message: 'logged in user!',
                user,
                token
            })
        } catch (error) {
            next(error)
        }
    },

    sign_out: async (req, res, next) => {
        const { email } = req.user
        try {
            await User.findOneAndUpdate(
                { email },
                { is_online: false },
                { new: true }
            )
            return res.status(200).json({
                succes: true,
                message: 'offline user!'
            })
        } catch (error) {
            next(error)
        }
    },

    sign_in_token: async (req, res, next) => {
        try {
            let user = await User.findOneAndUpdate(
                { email: req.user.email }, //parametro de busqueda
                { is_online: true }, //parámetro a modificar
                { new: true } //para que devuelva el objeto modificado
            )
            user.password = null //para proteger la contraseña
            const token = res.token
            return res.status(200).json({
                succes: true,
                message: 'logged in user!'
            })
        } catch (error) {
            next(error)
        }
    },

    getAll: async (req,res,next) => {
        try {
            let users = await User.find()
            if( users ){
                return res
                    .status(200)
                    .json({
                        Users: users
                    })
            }
        } catch (error) {
            next(error)
        }
    },

    getOne: async (req,res,next) => {
        try {
            let user = await User.findById( req.params.id)
            if ( user ){
                return res  
                    .status(200)
                    .json({
                        user
                    })
            }
        } catch (error) {
            next(error)
        }
    },

    update: async (req,res,next) => {
        try {
            let user = await User.findByIdAndUpdate( 
                req.params.id,
                req.body
                )
            if ( user ){
                return res 
                    .status(200)
                    .json({
                        message: 'User Successfully Updated',
                    })
            }
        } catch (error) {
            next(error)
        }
    },

    destroy: async (req,res,next) => {
        try {
            let user = await User.findByIdAndDelete( req.params.id )
            if ( user){
                return res  
                    .status(200)
                    .json({
                        message: 'User Successfully Deleted'
                    })
            }
        } catch (error) {
            next(error)
        }
    }

}

export default controller