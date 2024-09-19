import { googleAuthCallback,googleAuthRedirect,registerUser,loginUser,logoutUser, getCurrUser} from "../controllers/auth.controller.js";
import {Router} from "express"
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router= Router()

router.route("/google").get(googleAuthRedirect)
router.route("/google/callback").get(googleAuthCallback)

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/logout").post(verifyJWT,logoutUser)
router.route("/getCurrUser").get(verifyJWT,getCurrUser)

export default router

