import React from "react";

const Card = () => {
  return (
    <>
    <div className="w-[90vw] md:w-[40vw] lg:w-[25vw] xl:w-[20vw] h-[40vh] lg:h-[40vh] xl:h-[40vh]">

      <div className="flex flex-col gap-4  w-[90vw] md:w-[40vw] lg:w-[25vw] xl:w-[20vw] border-2 border-green-400 bg-green-200 lg:px-8 lg:py-6 p-4 rounded-xl h-[40vh] ">
  
        <div className="text-justify overflow-y-scroll scroll-smooth no-scrollbar h-[29vh]">
          <p className="text-sm md:text-base ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            illum aspernatur, distinctio alias voluptates, et provident cum
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores odit, eveniet mollitia saepe nulla earum adipisci ut id at voluptate error veniam commodi consequuntur a pariatur consequatur provident animi eos.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium impedit reprehenderit quaerat et consequatur repellendus nemo! Aspernatur voluptas illum iste?
           
          </p>
        </div>

      
        <div className="flex flex-col gap-1">
          <p className="font-bold text-base md:text-lg">Raj Karan Singh</p>
          <p className="italic text-sm md:text-base">Farmer, Madhya Pradesh</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Card;
