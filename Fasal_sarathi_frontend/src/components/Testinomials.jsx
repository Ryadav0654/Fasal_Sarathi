import React, { useRef } from 'react';
import {Card} from "./index.js"

const Testimonials = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="w-full lg:h-auto xl:h-auto flex flex-col justify-center items-center mb-10">
      <div className="lg:w-[90%] xl:w-[90%] w-[90%] h-full rounded-3xl lg:py-6 lg:px-10">
        <h1 className="lg:text-5xl text-3xl font-extrabold text-center mb-8">Testimonials</h1>

   
        <div className="relative w-full">
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#06a751] text-white px-4 py-2 rounded-full shadow-md hover:bg-[#034633FF] z-10"
            onClick={scrollLeft}
          >
            {"<"}
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#06a751] text-white px-4 py-2 rounded-full shadow-md hover:bg-[#034633FF] z-10"
            onClick={scrollRight}
          >
            {">"}
          </button>

         
          <div
            ref={scrollRef}
            className="w-full flex gap-4 overflow-x-auto lg:py-16 py-4 no-scrollbar scroll-smooth"
          >
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
