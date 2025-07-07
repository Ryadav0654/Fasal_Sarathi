import React, {useEffect} from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Button,  Testimonials } from "../components/index.js";
import { useNavigate } from "react-router-dom";
import FeedbackForm from "../components/FeedbackForm.jsx";
import { apiClient } from "../lib/api-client.js";
import { CURRENT_USER_ROUTES } from "../utils/constrants.js";
import TypedAnimation from "../components/TypedAnimation.jsx";
const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    (async () =>{
      try {
        const userdata = await apiClient.get(CURRENT_USER_ROUTES, {
          withCredentials: true,
        });
        if(userdata.data)
          {
            localStorage.setItem('accessToken', userdata.data.accessToken);  
              
          } 
        // console.log( userdata.data.user );
        
      } catch (error) {
        console.log("userdata error", error);
      }
    })();
  
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-[size:6rem_4rem] bg-white  bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)]  ">
      <Header />

      <div className="w-full ">
        
        <div className="h-[35vh] md:h-[33vh] lg:h-[46vh] xl:h-[70vh] w-full">
          <div className="flex flex-col items-center justify-center h-full px-4">
           
            <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-7xl font-extrabold text-center w-[90%] md:w-[70%] lg:w-[65%] leading-tight lg:leading-snug xl:leading-snug">
              Boost Crop Yield, Sustainably with{" "}
              {/* <span className="text-[#06a751]">Fasal Sarathi.</span> */}
              <TypedAnimation className="text-[#06a751]"/>
            </h1>

            
            <p className="text-xl md:text-2xl lg:text-2xl font-semibold text-center leading-normal mt-1 px-2 text-black/75">
              Get Your Fertilizer Recommendations Now.
            </p>

           
            <div className="mt-4 lg:mt-6">
              <Button
                btnname="Click Here"
                className="bg-[#0b6836] rounded-full border-none px-5 lg:px-7 py-3 text-lg lg:text-xl font-semibold text-white hover:bg-[#034633FF] flex items-center justify-center"
                onClickHandler={() => {
                  navigate("/user-input-form");
                }}
              />
            </div>
          </div>
        </div>

        <div className="w-full lg:h-[80vh] h-[40vh] md:h-[55vh] flex justify-center items-center mb-10 lg:mb-6 xl:mb-6  xl:mt-[-5vh]">
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
        </div>

        <Testimonials />
        <div className="w-full lg:h-[68vh]  flex justify-center items-center mb-10 ">
          <FeedbackForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
