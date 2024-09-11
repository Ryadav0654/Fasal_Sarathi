import React from "react";
import { Input } from "../components/index.js";
import { useForm } from "react-hook-form";
import bgImg from "../assets/bg-image1.jpg";
import googleIcon from '../assets/google.svg'
import facebookIcon from '../assets/facebook.svg'
import { Link } from "react-router-dom";
import { apiClient } from "../lib/api-client.js";
import { LOGIN_URL, GOOGLE_LOGIN_URL} from "../utils/constrants.js";
const Login = () => {
  const { register, handleSubmit } = useForm();

  const handleLogin = (data) => {
    console.log("form-data: ", data);
  };

  const handleGoogleLogin = async () => {
    try {
      const response = await apiClient.get(GOOGLE_LOGIN_URL);
    console.log("google login", response);
    } catch (error) {
      console.error("google login error: ", error);
    }
    
  };
  const handleFacebookLogin = () => {
    console.log("facebook login");
  };

  return (
  
    <div className="w-full lg:h-screen">
  <div className="w-full h-full flex justify-center items-center py-16 lg:py-32 px-4 md:px-14 lg:px-20 xl:px-28">
    <div className="lg:w-[80%] w-full h-full bg-green-200 rounded-2xl flex flex-col lg:flex-row justify-between shadow-lg shadow-emerald-300">
      
     
      <div className="lg:w-[45%] w-full py-10 md:px-8 px-6">
        <h1 className="md:text-5xl text-4xl font-extrabold text-center leading-tight">
          Welcome to <span className="text-[#06a751]">Fasal Sarathi</span>
        </h1>
        <form onSubmit={handleSubmit(handleLogin)} className="mt-6 md:px-3 px-2">
          <div className="font-semibold flex flex-col gap-6">
            
        
            <div>
              <Input
                type={"email"}
                placeholder={"Enter your email"}
                {...register("email", { required: true })}
                className="px-3 py-2 rounded-lg w-full"
                label={"Email"}
              />
            </div>
            
      
            <div>
              <Input
                type={"password"}
                placeholder={"Enter your password"}
                {...register("password", { required: true })}
                className="px-3 py-2 rounded-lg w-full"
                label={"Password"}
              />
            </div>
          </div>

       
          <div className="mt-6 flex justify-center items-center">
            <Input
              className="bg-[#0b6836] rounded-xl border-none px-7 py-2 text-xl flex cursor-pointer items-center justify-center font-semibold text-white hover:bg-[#034633FF] w-full"
              type={"submit"}
            />
          </div>
        </form>

       
        <div className="font-medium mt-4">
          <p className="text-center">
            Don't have an account?{" "}
            <Link to="/signup" className="text-[#117c43]">
              <span>Sign Up</span>
            </Link>
          </p>
        </div>

      
        <div className="mt-4 bg-black h-0.5"></div>

        
        <div className="flex justify-around mt-4 font-medium">
          <div
            className="rounded-xl border-2 border-black py-1 px-4 flex items-center gap-2 cursor-pointer"
            onClick={handleGoogleLogin}
          >
            <img src={googleIcon} alt="" className="w-7 h-7" />
            <p>Google</p>
          </div>
          <div className="rounded-xl border-2 border-black py-1 px-4 flex items-center gap-2 cursor-pointer">
            <img src={facebookIcon} alt="" className="w-7 h-7" />
            <p>Facebook</p>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="lg:w-[55%] hidden lg:block">
        <img src={bgImg} alt="" className="w-full h-full rounded-r-2xl object-cover" />
      </div>
    </div>
  </div>
</div>

  );
};

export default Login;
