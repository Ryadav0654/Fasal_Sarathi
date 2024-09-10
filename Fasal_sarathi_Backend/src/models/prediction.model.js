import mongoose, {Schema} from "mongoose";


const predictionSchema = new Schema(
    {
        Temparature: {
            type: Number,
            required: true,
        },
        Humidity: {
            type: Number,
            required: true,
        },
        googleId:{
            type:String,
            unique:true
        },
        fullName: {
            type: String,
            required: true,
            trim: true, 
            index: true
        },
        predictionHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ],
        password: {
            type: String,
            required: [true, 'Password is required']
        },
        refreshToken: {
            type: String
        }

    },
    {
        timestamps: true
    }
)