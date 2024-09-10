import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Button, Card } from "../components/index.js";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="w-full ">
        <div className='bg-[url("/assets/bg-image1.jpg")] h-[53vh] w-full'>
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
        <div className="w-full h-[80vh] flex justify-center items-center mb-10 mt-[-5vh]">
                <div className="w-[80%]  h-full rounded-3xl  ">
                    <h1 className="text-5xl font-extrabold text-center ">How to Use</h1>
                    <div className="w-full h-full py-10 flex justify-center items-center">
                    <iframe className="w-full h-full rounded-3xl" src="https://www.youtube.com/embed/Qs6cnQLsGzE?si=Plj867Oe8ADR_CNF" >
                    </iframe>
                    </div>
                </div>
        </div>
        <div className="w-full h-[65vh] flex justify-center items-center mb-10 ">
                <div className="w-[85%]  h-full rounded-3xl py-6 px-10 ">
                    <h1 className="text-5xl font-extrabold text-center ">Testinomials</h1>
                    <div className="w-full  py-16 flex gap-8">
                      <Card/>
                    </div>
                </div>
        </div>
        <div className="w-full h-[68vh] flex justify-center items-center mb-10 ">
                <div className="w-[80%] bg-green-400 h-full rounded-3xl py-6 px-10 ">
                    <h1 className="text-5xl font-extrabold text-center ">Give Feedback</h1>
                    <div className="w-full h-full pt-8 flex justify-center">
                      <div className="px-10">
                      <textarea name="feedback" cols={110} rows={10} id="" className="rounded-xl p-5 text-black font-medium mb-6" placeholder="Enter Your Feedback"></textarea>
                      <div className="grid grid-cols-3">
                      <input type="text" placeholder="Enter Your Name" className="rounded-xl px-3 py-2  text-black font-medium" />
                      <input type="text" placeholder="Enter Your Ocucupation" className="rounded-lg px-3 py-2 mx-5  text-black font-medium" />
                      <input type="text" placeholder="Enter Your Location" className="rounded-xl px-3 py-2 text-black font-medium" />
                      </div>
                      <div className="flex justify-center mt-3">

                      <button btnName="Submit" className="bg-[#06a751] rounded-lg border-none px-7 py-2 text-xl flex items-center justify-center font-semibold text-white hover:bg-[#034633FF] mt-5">Submit</button>
                      </div>
                      </div>
                    </div>
                </div> 
         </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
