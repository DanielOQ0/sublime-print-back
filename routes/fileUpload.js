import express from "express";
import controller from "../controllers/fileUpload.js";

const { upload } = controller

const router = express.Router()

router.post('/', upload )

export default router