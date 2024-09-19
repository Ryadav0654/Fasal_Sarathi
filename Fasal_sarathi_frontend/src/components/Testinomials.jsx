import React, { useRef } from "react";
import { Card } from "./index.js";

const Testimonials = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="w-full lg:h-auto xl:h-auto flex flex-col justify-center items-center mb-10">
      <div className="lg:w-[90%] xl:w-[90%] w-[90%] h-full rounded-3xl lg:py-6 lg:px-10">
        <h1 className="lg:text-5xl text-3xl font-extrabold text-center mb-8">
          Testimonials
        </h1>

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
            <Card
              name={"Rajesh Kumar"}
              state={"Uttar Pradesh"}
              occ={"Farmer"}
              msg={
                "Fasal Sarathi has been a game-changer for my farming practices. With its accurate fertilizer recommendations, my crop yield has increased by 20%. I no longer waste money on unnecessary fertilizers, and my soil health has improved significantly."
              }
            />

            <Card
              name={"Anjali Sharma"}
              state={"Maharashtra"}
              occ={"Commercial Farmer"}
              msg={
                "Fasal Sarathi is a fantastic tool for farmers and agricultural advisors. It provides precise fertilizer recommendations based on soil health and crop type, making it easier for farmers to adopt sustainable practices. It's user-friendly and highly effective."
              }
            />

            <Card
              name={"Ramesh Patel"}
              state={"Gujarat"}
              occ={"Small-scale Farmer"}
              msg={
                "Using Fasal Sarathi has simplified the entire fertilization process for me. Before, I was always confused about the right amount of fertilizer to use. Now, I have a reliable guide that helps me use just the right amount, resulting in healthier crops and reduced costs."
              }
            />

            <Card
              name={"Dr. Priya Verma"}
              state={"Punjab"}
              occ={"Agricultural Scientist"}
              msg={
                "Fasal Sarathi is a remarkable innovation in precision agriculture. It empowers farmers with data-driven decisions for fertilizer application, ensuring optimal crop growth and environmental sustainability. It's a win-win for both farmers and the ecosystem."
              }
            />

            <Card
              name={"Amit Singh"}
              state={"Haryana"}
              occ={"Commercial Farmer"}
              msg={
                "The predictions from Fasal Sarathi have been incredibly accurate. Since I started using it, I've noticed a 15% increase in crop yield and a significant reduction in fertilizer expenses. It's an essential tool for any farmer looking to optimize their farming operations."
              }
            />

            <Card
              name={"Suresh Choudhary"}
              state={"Rajasthan"}
              occ={"Organic Farmer"}
              msg={
                "As an organic farmer, I'm very cautious about the inputs I use. Fasal Sarathi provides tailored recommendations that align with my organic farming practices, helping me maintain soil fertility while ensuring a good harvest. It's been a great support system for my farm."
              }
            />

            <Card
              name={"Nirmala Devi"}
              state={"Karnataka"}
              occ={"Agricultural Cooperative Leader"}
              msg={
                "Fasal Sarathi has brought a revolutionary change in our community. Farmers now have access to scientific fertilizer recommendations, which has led to better crop quality and yield. The community's income has improved, and the soil's long-term health is being preserved."
              }
            />

            <Card
              name={"Mohan Rao"}
              state={"Andhra Pradesh"}
              occ={"Farmer"}
              msg={
                "With Fasal Sarathi, I have finally found a solution that understands the unique needs of my crops. It provides accurate fertilizer suggestions that match my soil type, and I've seen a noticeable improvement in both crop health and yield."
              }
            />

            <Card
              name={"Deepak Mehta"}
              state={"West Bengal"}
              occ={"Agritech Enthusiast"}
              msg={
                "Fasal Sarathi is an excellent example of how technology can benefit agriculture. It provides reliable and easy-to-understand recommendations, making advanced agricultural practices accessible to even small-scale farmers. It's transforming the way we farm."
              }
            />

            <Card
              name={"Kavita Joshi"}
              state={"Madhya Pradesh"}
              occ={"Farming Consultant"}
              msg={
                "I recommend Fasal Sarathi to all the farmers I work with. Its accurate predictions help them use fertilizers more efficiently, reducing costs and improving yields. It’s a must-have tool for modern farming."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
