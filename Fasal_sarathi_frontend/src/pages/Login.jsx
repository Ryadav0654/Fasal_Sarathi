import React from "react";
import { Input } from "../components/index.js";
import { useForm } from "react-hook-form";
import bgImg from "../assets/bg-image1.jpg";
import googleIcon from '../assets/google.svg'
import facebookIcon from '../assets/facebook.svg'
import { Link } from "react-router-dom";
const Login = () => {
  const { register, handleSubmit } = useForm();

  const handleLogin = (data) => {
    console.log("form-data: ", data);
  };

  return (
    <div className="w-full h-screen">
      <div className="w-full h-[100vh] flex justify-center items-center py-32 px-24">
        <div className="w-[80%] h-full bg-green-200 rounded-2xl  flex justify-between shadow-emerald-300">
          <div className="w-[60%] py-10 px-8">
            <h1 className="text-5xl font-extrabold text-center leading-tight">
              Welcome to <span className="text-[#06a751]">Fasal Sarathi</span>
            </h1>
            <form onSubmit={handleSubmit(handleLogin)} className="mt-6 px-3">
              <div className="font-semibold flex flex-col gap-6">
                <div>
                  <Input
                    type={"email"}
                    placeholder={"Enter your email"}
                    {...register("email", {
                      required: true,
                    })}
                    className=" px-3 py-2 rounded-lg w-full"
                    label={"Email"}
                  />
                </div>
                <div>
                  <Input
                    type={"password"}
                    placeholder={"Enter your password"}
                    {...register("password", {
                      required: true,
                    })}
                    className=" px-3 py-2 rounded-lg w-full"
                    label={"Password"}
                  />
                </div>
              </div>
              <div className="mt-6 flex justify-center items-center">
                <Input
                  className={
                    "bg-[#0b6836] rounded-xl border-none px-7 py-2 text-xl flex cursor-pointer items-center justify-center font-semibold text-white hover:bg-[#034633FF] w-full"
                  }
                  type={"submit"}
                />
              </div>
            </form>
            <div className="font-medium">
              <p className="text-center mt-4">
                Don't have an account?{" "}
                <Link to="/signup" className="text-[#117c43]">
                <span >Sign Up</span>
                </Link>
              </p>
            </div>
            <div className="mt-4 bg-black h-0.5"></div>
            <div className="flex justify-around mt-4 font-medium">
                <div className="rounded-xl border-2 border-black py-1 px-4 flex items-center gap-2 cursor-pointer">
                    <img src={googleIcon} alt=""className="w-7 h-7" />
                    <p>Google</p>
                </div>
                <div  className="rounded-xl border-2 border-black py-1 px-4 flex items-center gap-2 cursor-pointer">
                <img src={facebookIcon} alt="" className="w-7 h-7"/>
                    <p>Facebook</p>
                </div>
            </div>
          </div>

          <div className=" w-full">
            <img src={bgImg} alt="" className="w-full h-full rounded-r-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
