import { Router } from "express";
import { predictFertilizer } from "../controllers/model.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router = Router()
router.use(verifyJWT)
router.route("/").post(predictFertilizer)



export default router