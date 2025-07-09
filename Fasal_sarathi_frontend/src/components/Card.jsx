
const Card = ({name, state, occ, msg}) => {
  return (
    <>
    <div className="w-[90vw] md:w-[40vw] lg:w-[25vw] xl:w-[20vw] h-[40vh] lg:h-[40vh] xl:h-[40vh] ">

      <div className="flex flex-col gap-4  w-[90vw] md:w-[40vw] lg:w-[25vw] xl:w-[20vw] border-2 border-green-400 bg-green-200 lg:px-8 lg:py-5 p-4 rounded-xl h-[40vh] hover:bg-green-300">
  
        <div className=" overflow-y-scroll scroll-smooth no-scrollbar h-[29vh]">
          <p className="text-sm md:text-base text-justify">
           {msg}
           
          </p>
        </div>

      
        <div className="flex flex-col gap-1">
          <p className="font-bold text-base md:text-lg italic">{name}</p>
          <p className="italic text-sm md:text-sm">{occ}, {state}</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Card;
