import { User } from "../models/user.model.js"
export const generateAccessAndRefereshTokens = async(userId) =>{
    try {
        const user = await User.findById(userId)
        // console.log(user);
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()
        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false })

        return {accessToken, refreshToken}


    } catch (error) {
        throw new Error("Something went wrong while generating referesh and access token")
    }
}