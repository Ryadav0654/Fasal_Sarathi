import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Input,
  Select,
  ShowRecommendentFertilizer as ShowFertilizer,
  LoadingPage,
} from "../components/index.js";
import { apiClient } from "../lib/api-client.js";
import { PREDICTION_FERTILIZER_URL } from "../utils/constrants.js";
import { isAxiosError } from "axios";
import { toast } from "react-toastify";

const UserInputForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    
  });

  const [showFertilizer, setShowFertilizer] = useState(false);
  const [recommendateFertilizer, setRecommendateFertilizer] = useState({});
  const [loading, setLoading] = useState(false);

  const handleUserInput = async (userInputData) => {
    console.log("form-data: ", userInputData);
    setLoading(true);
    try {
      const { data, status } = await apiClient.post(
        PREDICTION_FERTILIZER_URL,
        userInputData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      if (data && status === 200) {
        console.log("recommendateFertilizer: ", data);
        const Fertilizer = {
          soilType: userInputData.Soil_Type,
          cropType: userInputData.Crop_Type,
          ...data,
        };
        setRecommendateFertilizer(Fertilizer);
        setShowFertilizer(true);
        reset();
        toast.success(data.message);
      }
    } catch (error) {
      if (isAxiosError(error)) {
        console.log(error.response);
        toast.error(error.response.data.message);
      } else {
        console.log("userInput error", error);
        toast.error(error.message);
      }
      setShowFertilizer(false);
      setLoading(false);
    } finally {
      setLoading(false);
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

  if(loading) return <LoadingPage />

  return (
    <>
      {showFertilizer && (
        <ShowFertilizer
          setShowFertilizer={setShowFertilizer}
          fert={recommendateFertilizer}
        />
      )}

        <div className="w-full mb-16">
          <div className=" flex flex-col justify-center items-center md:pt-5 ">
            <h1 className="lg:text-4xl text-3xl font-extrabold pt-3 text-center">
              Get Your Fertilizer Recommendations
            </h1>
            <p className="font-semibold md:text-xl text-center pt-2 pb-4">
              Please Enter the Following Details from soil test report.
            </p>
            <form
              onSubmit={handleSubmit(handleUserInput)}
              className="bg-transparent md:p-10 lg:w-[60%] md:w-[80%] m-3 p-4 rounded-xl md:rounded-2xl text-black font-semibold"
            >
              <div className=" grid md:grid-cols-4 grid-cols-1 gap-5">
                <div className="md:col-span-2">
                  <Input
                    type={"number"}
                    placeholder={"Temperature (°C): 10 - 50"}
                    {...register("Temparature", {
                      required: true,
                      min: 10,
                      max: 50,
                      valueAsNumber: true,
                    })}
                    className="px-3 py-2 rounded-lg w-full"
                    label={"Temperature (°C)"}
                    aria-invalid={errors.Temparature ? "true" : "false"}
                  />
                  {errors.Temparature?.type === "required" && (
                    <p role="alert" className="text-red-500 font-medium">
                      *Temperature is required
                    </p>
                  )}
                  {errors.Temparature?.type === "min" && (
                    <p className="text-red-500">Minimum Temperature is 10°C</p>
                  )}
                  {errors.Temparature?.type === "max" && (
                    <p className="text-red-500">Maximum Temperature is 50°C</p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <Input
                    type={"number"}
                    placeholder={"Humidity (%): 10 - 100"}
                    {...register("Humidity", {
                      required: true,
                      min: 10,
                      max: 100,
                      valueAsNumber: true,
                    })}
                    className=" px-3 py-2 rounded-lg w-full"
                    label={"Humidity (%)"}
                    aria-invalid={errors.Humidity ? "true" : "false"}
                  />
                  {errors.Humidity?.type === "required" && (
                    <p role="alert" className="text-red-500 font-medium">
                      *Humidity is required
                    </p>
                  )}
                  {errors.Humidity?.type === "min" && (
                    <p className="text-red-500">Minimum Humidity is 10%</p>
                  )}
                  {errors.Humidity?.type === "max" && (
                    <p className="text-red-500">Maximum Humidity is 100%</p>
                  )}
                </div>
                <div className="md:col-span-2">
                  <Input
                    type={"number"}
                    placeholder={"Moisture (%): 0 - 100"}
                    {...register("Moisture", {
                      required: true,
                      min: 0,
                      max: 100,
                      valueAsNumber: true,
                    })}
                    className=" px-3 py-2 rounded-lg w-full"
                    label={"Moisture (%)"}
                    aria-invalid={errors.Moisture ? "true" : "false"}
                  />
                  {errors.Moisture?.type === "required" && (
                    <p role="alert" className="text-red-500 font-medium">
                      *Moisture is required
                    </p>
                  )}
                  {errors.Moisture?.type === "min" && (
                    <p className="text-red-500">Minimum Moisture is 0%</p>
                  )}
                  {errors.Moisture?.type === "max" && (
                    <p className="text-red-500">Maximum Moisture is 100%</p>
                  )}
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
                    placeholder={"Nitrogen (kg/ha): 0 - 140"}
                    {...register("PresentN", {
                      required: true,
                      min: 0,
                      max: 140,
                      valueAsNumber: true,
                    })}
                    className=" px-3 py-2 rounded-lg w-full"
                    label={"Nitrogen (N)"}
                    aria-invalid={errors.PresentN ? "true" : "false"}
                  />
                  {errors.PresentN?.type === "required" && (
                    <p role="alert" className="text-red-500 font-medium">
                      *Nitrogen is required
                    </p>
                  )}
                  {errors.PresentN?.type === "min" && (
                    <p className="text-red-500">Minimum Nitrogen is 0 kg/ha</p>
                  )}
                  {errors.PresentN?.type === "max" && (
                    <p className="text-red-500">
                      Maximum Nitrogen is 140 kg/ha
                    </p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <Input
                    type={"number"}
                    placeholder={"Phosphorus (kg/ha): 0 - 100"}
                    {...register("PresentP", {
                      required: true,
                      min: 0,
                      max: 100,
                      valueAsNumber: true,
                    })}
                    className=" px-3 py-2 rounded-lg w-full"
                    label={"Phosphorus (P)"}
                    aria-invalid={errors.PresentP ? "true" : "false"}
                  />
                  {errors.PresentP?.type === "required" && (
                    <p role="alert" className="text-red-500 font-medium">
                      *Phosphorus is required
                    </p>
                  )}
                  {errors.PresentP?.type === "min" && (
                    <p className="text-red-500">
                      Minimum Phosphorus is 0 kg/ha
                    </p>
                  )}
                  {errors.PresentP?.type === "max" && (
                    <p className="text-red-500">
                      Maximum Phosphorus is 100 kg/ha
                    </p>
                  )}
                </div>
                <div className="md:col-span-2">
                  <Input
                    type={"number"}
                    placeholder={"Potassium (kg/ha): 0 - 400"}
                    {...register("PresentK", {
                      required: true,
                      min: 0,
                      max: 400,
                      valueAsNumber: true,
                    })}
                    className=" px-3 py-2 rounded-lg w-full"
                    label={"Potassium (K)"}
                    aria-invalid={errors.PresentK ? "true" : "false"}
                  />
                  {errors.PresentK?.type === "required" && (
                    <p role="alert" className="text-red-500 font-medium">
                      *Potassium is required
                    </p>
                  )}
                  {errors.PresentK?.type === "min" && (
                    <p className="text-red-500">Minimum Potassium is 0 kg/ha</p>
                  )}
                  {errors.PresentK?.type === "max" && (
                    <p className="text-red-500">
                      Maximum Potassium is 400 kg/ha
                    </p>
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
