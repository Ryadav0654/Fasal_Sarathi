import { getPredictionHistory } from "../controllers/user.controller.js";
import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router = Router()
router.use(verifyJWT)


router.route("/predictions").get(getPredictionHistory)



export default router

