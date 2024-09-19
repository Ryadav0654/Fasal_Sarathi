import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"


const userSchema = new Schema(
    {
        username: {
            type: String,
            // required: true,
            unique: true,
            lowercase: true,
            trim: true, 
            index: true,
            sparse: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true, 
        },
        googleId:{
            type:String,
            unique:true,
            sparse: true
        },
        fullName: {
            type: String,
            required: true,
            trim: true, 
            index: true
        },
        picture:{
            type:String,
            default:"https://res.cloudinary.com/campus-connect-web/image/upload/v1723035802/defauld_profile_pic_xlsoua.png"
        },
        predictionHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Prediction"
            }
        ],
        password: {
            type: String,
        },
        refreshToken: {
            type: String
        },
        passwordSet:{
            type: Boolean,
            default: false
        }

    },
    {
        timestamps: true
    }
)

userSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User", userSchema)