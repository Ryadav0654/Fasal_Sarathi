import { asyncHandler } from "../utils/asyncHandeler.js"
import { PythonShell } from "python-shell";
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import {Prediction} from "../models/prediction.model.js"
import { User } from "../models/user.model.js";

// Define __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const predictFertilizer = asyncHandler(async(req,res)=>{
    // const input_data=req.body.input_data
    const {Temparature,Humidity,Moisture,Soil_Type,Crop_Type,PresentN,PresentP,PresentK}=req.body;
    if(!Temparature||!Humidity||!Moisture||!Soil_Type||!Crop_Type||!PresentK||!PresentN||!PresentP){
        throw new Error("input_data is required ");  
    }
    const input_data ={
            "Temparature": Temparature,
            "Humidity": Humidity,
            "Moisture": Moisture,
            "Soil Type": Soil_Type,
            "Crop Type": Crop_Type,
            "Present N": PresentN,
            "Present P": PresentP,
            "Present K": PresentK 		
        }
    console.log(input_data)
    let options = {
        mode: 'text',
        pythonPath: '',
        pythonOptions: ['-u'], // get print results in real-time
        scriptPath: path.join(__dirname, '../ml/'),
        args: [JSON.stringify(input_data)]
      };
    PythonShell.run('predict.py', options).then(async(messages)=>{
         try {
          // console.log(messages)
          const result = JSON.parse(messages)
          const prediction = await Prediction.create({
            Temparature,
            Humidity,
            Moisture,
            SoilType:Soil_Type,
            CropType:Crop_Type,
            PresentN,
            PresentP,
            PresentK,
            owner : req.user._id,
            fertilizer_name:result.fertilizer_name,
            fertilizer_quantity:result.fertilizer_quantity
          })
          if(!prediction){
            throw new Error("Error while saving prediction to database ")
          }
          const updated_user = await User.findByIdAndUpdate(req.user._id,
            {$push:{predictionHistory:prediction._id}},
            {new :true}
          );
          if(!updated_user){
            throw new Error("Error while updating prediction history ");
          }
          console.log(updated_user.predictionHistory)
          console.log(result)
          res.status(200).send(result)
         } catch (error) {
            console.log("error in here ",error)
            res.status(500).send(error)
         }
      }).catch(err=>{
        console.log("error in line 21");
        res.status(500).send(err);
      });
})

export {predictFertilizer}