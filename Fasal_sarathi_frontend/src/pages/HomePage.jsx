import React, {useEffect} from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Button,  Testimonials } from "../components/index.js";
import { useNavigate } from "react-router-dom";
import TypedAnimation from "../components/TypedAnimation.jsx";
import Process from "../components/Process.jsx";
import Features from "../components/Features.jsx";
const HomePage = () => {
  const navigate = useNavigate();

// bg-[size:6rem_4rem] bg-white bg-[linear-gradient(to_right,#aaa_1px,transparent_1px),linear-gradient(to_bottom,#aaa_1px,transparent_1px)]
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-green-200 via-[#FFF9E3] to-[#faf5e4d2]">
      <Header />
      <div className="w-full">
          <div className="flex flex-col items-center justify-center h-full px-4 py-8">
            <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-center w-[70%] leading-tight lg:leading-snug xl:leading-snug">
              Boost Crop Yield, Sustainably with{" "}
              {/* <span className="text-[#06a751]">Fasal Sarathi.</span> */}
            </h1>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center w-full md:w-[70%] leading-tight lg:leading-snug xl:leading-snug">
              <TypedAnimation className="text-[#06a751]"/>
            </h1>
            <p className="text-xl font-semibold  max-w-4xl text-center leading-relaxed mt-1 lg:px-12 text-gray-800">
              AI-driven personalized fertilizer guidance for a greener tomorrow. 
            Help farmers improve yield and soil health through smart, eco-conscious fertilizer planning.
            </p>

           
            <div className="mt-4 lg:mt-6">
              <Button
                btnname="Get Started"
                className="bg-[#0b6836] rounded-full border-none px-5 lg:px-7 py-3 text-lg lg:text-xl font-semibold text-white hover:bg-[#034633FF] flex items-center justify-center"
                onClickHandler={() => {
                  navigate("/user-input-form");
                }}
              />
            </div>
        </div>

        {/* <div className="w-full lg:h-[80vh] h-[40vh] md:h-[55vh] flex justify-center items-center mb-10 lg:mb-6 xl:mb-6  xl:mt-[-5vh]">
          <div className="lg:w-[80%] w-[90%] md:h-full h-full rounded-3xl ">
            <h1 className="lg:text-5xl text-3xl font-extrabold text-center ">
              How to Use
            </h1>
            <div className="w-full h-full py-5 lg:py-10 flex justify-center items-center">
              <iframe
                className="w-full h-full rounded-3xl"
                src="https://www.youtube.com/embed/Qs6cnQLsGzE?si=Plj867Oe8ADR_CNF"
              ></iframe>
            </div>
          </div>
        </div> */}
        <Features />
        <Process />
        <Testimonials />

      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
