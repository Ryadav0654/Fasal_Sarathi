import { Router } from "express";
import { predictFertilizer } from "../controllers/model.controller.js";
const router = Router()

router.route("/").post(predictFertilizer)



export default router