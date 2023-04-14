import express from "express";
import passport from "../middlewares/users/passport.js";
import payments from  "../controllers/payments/create.js";

let router = express.Router()

const {create} = payments

router.post("/", passport.authenticate("jwt",{session:false}), create)

export default router