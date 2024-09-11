import React from "react";

const ShowRecommendentFertilizer = ({ setShowFertilizer, fert }) => {
  return (
  
    <div className="w-full h-full flex flex-col fixed top-0 left-0 right-0 bottom-0 z-50 bg-white/85">
  <div className="w-full max-w-lg lg:max-w-3xl p-4 lg:px-20 lg:py-10 rounded-2xl m-auto bg-white shadow-lg">
    <div className="shadow-md border-2 border-green-500 shadow-green-600 rounded-2xl p-5 bg-green-200">
      

      <div className="flex justify-between items-center mb-3 px-2">
        <h1 className="text-xl lg:text-3xl font-extrabold text-center w-full">
          Recommended Fertilizer for your Crop
        </h1>
        
      </div>

   
      <div className="px-4 py-5">
        <div className="flex justify-between pb-3 flex-wrap">
          <h1 className="font-semibold text-base lg:text-xl">
            👉 Soil Type:{" "}
            <span className="font-bold">{fert?.soilType}</span>
          </h1>
          <h1 className="font-semibold text-base lg:text-xl">
            👉 Crop Name:{" "}
            <span className="font-bold">{fert?.cropType}</span>
          </h1>
        </div>
        <h1 className="font-semibold text-base lg:text-xl">
          👉 Fertilizer Name:{" "}
          <span className="font-bold">{fert?.fertilizer_name}</span>
        </h1>
        <h1 className="mt-3 font-semibold text-base lg:text-xl">
          👉 Fertilizer Quantity:{" "}
          <span className="font-bold">{fert?.fertilizer_quantity} kg per acre</span>
        </h1>
      </div>

      
      <div className="flex justify-center items-center pt-3">
        <button
          className="bg-green-500 text-white px-5 py-2 rounded-full text-base lg:text-xl font-semibold hover:bg-[#00b300]"
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
