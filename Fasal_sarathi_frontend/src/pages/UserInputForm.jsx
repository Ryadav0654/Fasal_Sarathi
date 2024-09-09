import React from "react";
import { useForm } from "react-hook-form";
import { Input, Button, Select } from "../components/index.js";

const UserInputForm = () => {
  const { register, handleSubmit } = useForm();

  const handleUserInput = (data) => {
    console.log("form-data: ",data);
  };

  const soilType = ["Select Soil type","hello", "world"];
  const cropType = ["Select Crop type","hello", "world"];

  return (
    <div className="w-full mb-10 ">
      <div className=" flex flex-col justify-center items-center">
        <h1 className="text-3xl font-extrabold py-6">
          Get Your Fertilizer Recommendations
        </h1>
        <form
          onSubmit={handleSubmit(handleUserInput)}
          className="  bg-[#06a751] p-10 w-[70%] rounded-3xl text-white font-semibold"
        >
          <div className=" grid grid-cols-4 gap-8">
            <div className="col-span-2">
              <Input
                type={"number"}
                placeholder={"Enter Temparature"}
                {...register("Temparature", {
                  required: true,
                })}
                className=" px-3 py-2 rounded-lg w-full"
                label={"Temparature"}
              />
            </div>

            <div className="col-span-2">
              <Input
                type={"number"}
                placeholder={"Enter Humidity"}
                {...register("Humidity", {
                  required: true,
                })}
                className=" px-3 py-2 rounded-lg w-full"
                label={"Humidity"}
              />
            </div>
            <div className="col-span-2">
              <Input
                type={"number"}
                placeholder={"Enter Moisture"}
                {...register("Moisture", {
                  required: true,
                })}
                className=" px-3 py-2 rounded-lg w-full"
                label={"Moisture"}
              />
            </div>

            <div className="col-span-2 flex items-center ml-16">
              <Button
                className={
                  "bg-[#0b6836] rounded-2xl border-none px-7 py-2 text-xl flex items-center justify-center font-normal text-white hover:bg-[#034633FF]"
                }
                btnName={"Use current location"}
              ></Button>
            </div>
            <div className="col-span-2">
              <Select
                options={soilType}
                placeholder={"Enter Your Email"}
                {...register("Soil Type")}
                className=" px-3 py-2 rounded-lg w-full"
                label={"Soil Type"}
              />
            </div>

            <div className="col-span-2">
              <Select
                
                options={cropType}
                {...register("Crop Type")}
                className=" px-3 py-2 rounded-lg w-full"
                label={"Crop Type"}
              />
            </div>
            <div className="col-span-2">
              <Input
                type={"number"}
                placeholder={"Enter Nitrogen(N)"}
                {...register("Present N", {
                    required: true,
                  })}
                className=" px-3 py-2 rounded-lg w-full"
                label={"Nitrogen(N)"}
              />
            </div>

            <div className="col-span-2">
              <Input
                type={"number"}
                placeholder={"Enter Phosphorus(P)"}
                {...register("Present P", {
                    required: true,
                  })}
                className=" px-3 py-2 rounded-lg w-full"
                label={"Phosphorus(P)"}
              />
            </div>
            <div className="col-span-2">
              <Input
                type={"number"}
                placeholder={"Enter Potassium(K)"}
                {...register("Present K", {
                    required: true,
                  })}
                className=" px-3 py-2 rounded-lg w-full"
                label={"Potassium(K)"}
              />
            </div>
          </div>
          <div className="mt-6 flex justify-center items-center">
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
  );
};

export default UserInputForm;
