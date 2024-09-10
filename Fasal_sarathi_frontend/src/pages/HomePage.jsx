import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Button } from "../components/index.js";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="w-full ">
        <div className='bg-[url("/assets/bg-image1.jpg")] h-[58.4vh] w-full'>
          <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-6xl font-extrabold  w-[60%] text-center leading-snug">
              Boost Crop Yield, Sustainably with{" "}
              <span className="text-[#06a751]">Fasal Sarathi.</span>
            </h1>
            <p className="text-2xl font-semibold text-center leading-normal mt-1">
              Get Your Fertilizer Recommendations Now.
            </p>
            <div className="mt-6">
              <Button
                btnName="Click Here"
                className={
                  "bg-[#0b6836] rounded-full border-none px-7 py-3 text-xl flex items-center justify-center font-semibold text-white hover:bg-[#034633FF]"
                }
                onClickHandler={() => {
                  navigate("/user-input-form");
                }}
              />
            </div>
          </div>
        </div>
        {/* <div className="w-full h-[60vh] flex justify-center items-center mb-10">
                <div className="w-[80%] bg-green-400 h-full rounded-3xl p-5 flex justify-center items-center">
                    <h1 className="text-6xl font-bold">Hello</h1>
                </div>
        </div> */}
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
