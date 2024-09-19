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
        Moisture:{
            type:Number,
            required:true
        },
        owner:{
            type: Schema.Types.ObjectId,
            ref: "User",
            required:true
        },
        SoilType:{
            type:String,
            required:true
        },
        CropType:{
            type:String,
            required:true
        },
        PresentN:{
            type:Number,
            required:true
        },
        PresentP:{
            type:Number,
            required:true
        },
        PresentK:{
            type:Number,
            required:true
        },
        fertilizer_name:{
            type:String,
            required:true
        },
        fertilizer_quantity:{
            type:Number,
            required :true
        }
    },
    {
        timestamps: true
    }
)
export const Prediction = mongoose.model("Prediction", predictionSchema)