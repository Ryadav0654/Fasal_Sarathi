import React from "react";

const ShowRecommendentFertilizer = ({ setShowFertilizer, fert }) => {
  return (
    <div className="w-full h-100vh flex flex-col fixed top-0 left-0 right-0 bottom-0 z-50">
      <div className="w-full h-full bg-white/85 rounded-2xl flex justify-center items-center flex-col px-[20rem] z-50">
        <div className="shadow-md border-2 border-green-500 shadow-green-600 rounded-2xl w-[80%] p-5 bg-green-200 ">
          <div className="flex justify-between items-center mb-3 w-full px-5">
            <h1 className="text-3xl text-center font-extrabold">
              Recommended Fertilizer for your Crop
            </h1>
            {/* <button  className="text-2xl mt-[-20px]">
                ❌
              </button> */}
          </div>
          <div className="px-5 py-5">
            <div className="flex justify-between pr-12 pb-3 flex-wrap">
              <h1 className="font-semibold text-xl text-opacity-80">
                👉 Soil Type:{" "}
                <span className="font-bold text-opacity-100">
                  {fert?.soilType}
                </span>
              </h1>
              <h1 className="font-semibold text-xl text-opacity-80">
                👉 Crop Name:{" "}
                <span className="font-bold text-opacity-100">
                  {fert?.cropType}
                </span>
              </h1>
            </div>
            <h1 className="font-semibold text-xl text-opacity-80">
              👉 Fertilizer Name:{" "}
              <span className="font-bold text-opacity-100">
                {fert?.fertilizer_name}
              </span>
            </h1>
            <h1 className="mt-3 font-semibold text-xl opacity-80">
              👉 Fertilizer Quantity:{" "}
              <span className="font-bold text-opacity-100">
                {fert?.fertilizer_quantity} kg/hectare
              </span>
            </h1>
          </div>
          <div className="flex justify-center items-center pt-3">
            <button
              className="bg-green-500 text-white px-5 py-2 rounded-full text-xl font-semibold  hover:bg-[#00b300]"
              onClick={() => setShowFertilizer(false)}
            >
              ❌ Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowRecommendentFertilizer;
