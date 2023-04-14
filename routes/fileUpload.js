import express from "express";
import controller from "../controllers/fileUpload.js";
import passport from '../middlewares/users/passport.js'
import validator from '../middlewares/validator.js'
import schema from '../schema/fileUpload.js'
import fileExists from "../middlewares/fileExists.js";

const { upload, destroy } = controller

const router = express.Router()

router.post('/', passport.authenticate('jwt', { session: false}), validator(schema), fileExists, upload )
router.delete('/:id', passport.authenticate('jwt', { session: false}), destroy )

export default router