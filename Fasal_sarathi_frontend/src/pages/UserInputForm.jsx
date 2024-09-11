import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { Input, Button, Select, ShowRecommendentFertilizer as ShowFertilizer } from "../components/index.js";
import { apiClient } from "../lib/api-client.js";
import { PREDICTION_FERTILIZER_URL } from "../utils/constrants.js";

const UserInputForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const [showFertilizer, setShowFertilizer] = useState(false);
  const [recommendateFertilizer, setRecommendateFertilizer] = useState({});

  const handleUserInput = async (data) => {
    console.log("form-data: ", data);
    
    try {
      const response = await apiClient.post(
        PREDICTION_FERTILIZER_URL,
        data
      );
      console.log("response prediction: ", response);
      if(response){
        setShowFertilizer(true);
        console.log("recommendateFertilizer: ", response.data);
        const Fertilizer = {
          soilType: data.Soil_Type,
          cropType: data.Crop_Type,
          ...response.data,
        }
        setRecommendateFertilizer(Fertilizer);
        reset();
      }
    } catch (error) {
      setShowFertilizer(false);
      console.error("userInput error: ", error);
    }
  };

  const soilType = ["Sandy", "Loamy", "Black", "Red", "Clayey"];
  const cropType = [
    "Maize",
    "Sugarcane",
    "Cotton",
    "Tobacco",
    "Paddy",
    "Barley",
    "Wheat",
    "Millets",
    "Oil seeds",
    "Pulses",
    "Ground Nuts",
  ];

  return (
    <>
    {
      showFertilizer && <ShowFertilizer setShowFertilizer={setShowFertilizer} fert={recommendateFertilizer}/>
    }
    <div className="w-full mb-16 ">
      <div className=" flex flex-col justify-center items-center md:pt-5 ">
        <h1 className="lg:text-4xl text-3xl font-extrabold pt-3 text-center">
          Get Your Fertilizer Recommendations
        </h1>
        <p className="font-semibold md:text-xl text-center pt-2 pb-4">
          Please Enter the Following Details from soil test report.
        </p>
        <form
          onSubmit={handleSubmit(handleUserInput)}
          className="  bg-green-400 md:p-10 lg:w-[60%] md:w-[80%] m-3 p-4 rounded-xl md:rounded-2xl text-black font-semibold"
        >
          <div className=" grid md:grid-cols-4 grid-cols-1 gap-5">
            <div className="md:col-span-2">
              <Input
                type={"number"}
                placeholder={"Enter Temparature"}
                {...register("Temparature", {
                  required: true,
                })}
                className=" px-3 py-2 rounded-lg w-full"
                label={"Temparature"}
                aria-invalid={errors.Temparature ? "true" : "false"}
              />
              {errors.Temparature?.type === "required" && (
                <p role="alert" className="text-red-500 font-medium">*Temparature is required</p>
              )}
            </div>

            <div className="md:col-span-2">
              <Input
                type={"number"}
                placeholder={"Enter Humidity"}
                {...register("Humidity", {
                  required: true,
                })}
                className=" px-3 py-2 rounded-lg w-full"
                label={"Humidity"}
                aria-invalid={errors.Humidity ? "true" : "false"}
              />
               {errors.Humidity?.type === "required" && (
                <p role="alert" className="text-red-500 font-medium">*Humidity is required</p>
              )}
            </div>
            <div className="md:col-span-2">
              <Input
                type={"number"}
                placeholder={"Enter Moisture"}
                {...register("Moisture", {
                  required: true,
                })}
                className=" px-3 py-2 rounded-lg w-full"
                label={"Moisture"}
                aria-invalid={errors.Moisture ? "true" : "false"}
              />
               {errors.Moisture?.type === "required" && (
                <p role="alert" className="text-red-500 font-medium">*Moisture is required</p>
              )}
            </div>

            <div className="md:col-span-2 flex items-center md:ml-10 lg:mt-5">
              <Button
                className={
                  "bg-[#0b6836] rounded-xl border-none lg:px-7 lg:py-2  py-2 px-3 flex items-center  md:font-medium text-white hover:bg-[#034633FF]"
                }
                btnname={"Use current location"}
              ></Button>
            </div>
            <div className="md:col-span-2">
              <Select
                options={soilType}
                placeholder={"Enter Your Email"}
                {...register("Soil_Type")}
                className=" px-3 py-2 rounded-lg w-full"
                label={"Select Soil type"}

              />
            </div>

            <div className="md:col-span-2">
              <Select
                options={cropType}
                {...register("Crop_Type")}
                className=" px-3 py-2 rounded-lg w-full"
                label={"Select Crop type"}
              />
            </div>
            <div className="md:col-span-2">
              <Input
                type={"number"}
                placeholder={"Enter Nitrogen(N)"}
                {...register("PresentN", {
                  required: true,
                  max: 160,
                  min: 0,
                })}
                className=" px-3 py-2 rounded-lg w-full"
                label={"Nitrogen(N)"}
                aria-invalid={errors.PresentN ? "true" : "false"}
              />
               {errors.PresentN?.type === "required" && (
                <p role="alert" className="text-red-500 font-medium">*Nitrogen(N) is required</p>
              )}
            </div>

            <div className="md:col-span-2">
              <Input
                type={"number"}
                placeholder={"Enter Phosphorus(P)"}
                {...register("PresentP", {
                  required: true,
                  min: 0,
                  max: 80,
                })}
                className=" px-3 py-2 rounded-lg w-full"
                label={"Phosphorus(P)"}
                aria-invalid={errors.PresentP ? "true" : "false"}
              />
               {errors.PresentP?.type === "required" && (
                <p role="alert" className="text-red-500 font-medium">*Phosphorus(P)  is required</p>
              )}
            </div>
            <div className="md:col-span-2">
              <Input
                type={"number"}
                placeholder={"Enter Potassium(K)"}
                {...register("PresentK", {
                  required: true,
                  min: 0,
                  max: 200,
                })}
                className=" px-3 py-2 rounded-lg w-full"
                label={"Potassium(K)"}
                aria-invalid={errors.PresentK ? "true" : "false"}
              />
               {errors.PresentK?.type === "required" && (
                <p role="alert" className="text-red-500 font-medium">*Potassium(K) is required</p>
              )}
            </div>
          </div>
          <div className="mt-8 flex justify-center items-center">
            <Input
              className={
                "bg-[#0b6836] rounded-full border-none px-7 py-3 text-xl flex cursor-pointer items-center justify-center font-semibold text-white hover:bg-[#034633FF]"
              }
              type={"submit"}
            />
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default UserInputForm;
