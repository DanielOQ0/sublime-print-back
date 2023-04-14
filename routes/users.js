import express from 'express';
import validator from '../middlewares/validator.js'
import controller from '../controllers/auth/auth.js'
import schema from '../schema/users.js'
import schema_signin from '../schema/sign_in.js'
import accountExistsSignUp from '../middlewares/users/accountExistsSignUp.js'
import accountExistsSignIn from '../middlewares/users/accountExistsSignIn.js'
import accountHasBeenVerified from '../middlewares/users/accountHasBeenVerified.js'
import passwordIsOk from '../middlewares/users/passwordIsOk.js'
import passport from '../middlewares/users/passport.js'
import isVerify from '../controllers/auth/verify.js'
import accountExists from '../middlewares/users/accountExists.js'
import user_update from '../schema/userUpdate.js'

const {sign_up, sign_in, sign_out, sign_in_token, getAll, getOne, update, destroy} = controller
const {verify} = isVerify

const router = express.Router();

router.post('/signup', validator(schema), accountExistsSignUp, sign_up );
router.post('/signin', validator(schema_signin), accountExistsSignIn,accountHasBeenVerified, passwordIsOk, sign_in )
router.post('/signout', passport.authenticate('jwt',{session:false}), sign_out) 
router.post('/signintoken', passport.authenticate('jwt',{session:false}), sign_in_token)
router.get( '/verify/:verify_code', verify)
router.get('/',passport.authenticate('jwt',{ session: false}), getAll )
router.get('/me',passport.authenticate('jwt',{ session: false}), getOne )
router.put('/',passport.authenticate('jwt',{ session: false}), validator(user_update), accountExists, update )
router.delete('/:id',passport.authenticate('jwt',{ session: false}), destroy)

export default router;