import { User } from "../models/user.model.js";
import {asyncHandler} from "../utils/asyncHandeler.js"


const getPredictionHistory =asyncHandler(async(req,res)=>{
    const userId= req.user._id;
    if(!userId){
        throw new Error("userId is not present");  
    }
    const user = await User.findById(userId).populate('predictionHistory');
    if(!user){
        throw new Error("user data not found "); 
    }
    // console.log(user)
    res.status(200).json({ predictions: user.predictionHistory.reverse() });
})

export {getPredictionHistory}
