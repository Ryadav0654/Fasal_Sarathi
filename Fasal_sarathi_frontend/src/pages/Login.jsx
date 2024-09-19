import React, { useEffect, useState } from "react";
import { Button, ErrorPage, Input, LoadingPage } from "../components/index.js";
import { useForm } from "react-hook-form";
import bgImg from "../assets/bg-image1.jpg";
import googleIcon from "../assets/google.svg";
import facebookIcon from "../assets/facebook.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/slice/authThunk.js";
import { GOOGLE_LOGIN_ROUTE } from "../utils/constrants.js";

const Login = () => {
  // const [user, setUser] = useState({});
  const [error, setError] = useState(false);
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

 
  // setUser(userData);
  

  const handleLogin = async (data) => {
    console.log("form-data: ", data);
    setError(false);
    setloading(true);
    const { email, password } = data;
    try {
      const response = await dispatch(login({ email, password }));
      console.log("login response: ", response);
      if (response) {
        setloading(false);
        navigate("/");
      }
      reset();
    } catch (error) {
      setError(true);
      setloading(false);
      console.error("login error: ", error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const originalUrl = window.location.href;
       window.location.href = `${import.meta.env.VITE_SERVER_URL}${GOOGLE_LOGIN_ROUTE}?redirectUrl=${encodeURIComponent(originalUrl)}`;
      //  console.log("google login", res);
      const queryParams = new URLSearchParams(window.location.search);
      console.log("queryParams: ", queryParams); 
    } catch (error) {

      console.error("google login error: ", error);
    }
  };


  const handleFacebookLogin = () => {
    console.log("facebook login");
  };

  return (
    <>
      {loading && <LoadingPage />}
      {error ? (
        <ErrorPage />
      ) : (
        <div className="w-full lg:h-screen">
          <div className="w-full h-full flex justify-center items-center py-16 lg:py-32 px-4 md:px-14 lg:px-20 xl:px-28">
            <div className="lg:w-[80%] w-full h-full bg-green-200 rounded-2xl flex flex-col lg:flex-row justify-between shadow-lg shadow-emerald-300">
              {/* Form Section */}
              <div className="lg:w-[45%] w-full py-10 md:px-8 px-6">
                <h1 className="md:text-5xl text-4xl font-extrabold text-center leading-tight">
                  Welcome to{" "}
                  <span className="text-[#06a751]">Fasal Sarathi</span>
                </h1>

                {/* Form */}
                <form
                  onSubmit={handleSubmit(handleLogin)}
                  className="mt-6 md:px-3 px-2"
                >
                  <div className="font-semibold flex flex-col gap-6">
                    {/* Email Input */}
                    <div>
                      <Input
                        type={"email"}
                        placeholder={"Enter your email"}
                        {...register("email", {
                          required: "*Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                          },
                        })}
                        className={
                          "px-3 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                        }
                        label={"Email"}
                      />
                      {/* Error Handling for Email */}
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    {/* Password Input */}
                    <div>
                      <Input
                        type={"password"}
                        placeholder={"Enter your password"}
                        {...register("password", {
                          required: "*Password is required",
                          minLength: {
                            value: 6,
                            message:
                              "Password must be at least 6 characters long",
                          },
                        })}
                        className={
                          "px-3 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                        }
                        label={"Password"}
                      />
                      {/* Error Handling for Password */}
                      {errors.password && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.password.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="mt-6 flex justify-center items-center">
                    <Button
                      className={` bg-green-600 hover:bg-green-700 rounded-xl border-none px-7 py-2 text-xl flex cursor-pointer items-center justify-center font-semibold text-white hover:bg-[#034633FF] w-full }`}
                      type={"submit"}
                      btnname={"Login"}
                    />
                  </div>
                </form>

                {/* Sign Up Redirect */}
                <div className="font-medium mt-4">
                  <p className="text-center">
                    Don't have an account?{" "}
                    <Link
                      to="/signup"
                      className="text-green-600 hover:text-green-700 font-bold"
                    >
                      Sign Up
                    </Link>
                  </p>
                </div>

                {/* Divider */}
                <div className="mt-4 bg-black h-0.5"></div>

                {/* Social Login Buttons */}
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
                <img
                  src={bgImg}
                  alt=""
                  className="w-full h-full rounded-r-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
