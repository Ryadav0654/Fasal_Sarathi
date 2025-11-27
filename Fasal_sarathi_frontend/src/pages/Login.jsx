import { useState } from "react";
import { Button, Input } from "../components/index.js";
import {  useForm } from "react-hook-form";
import bgImg from "../assets/bg-image1.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { isAxiosError } from "axios";
import { apiClient } from "../lib/api-client.js";
import { loginSuccess } from "../redux/slice/AuthSlice.js";
import { LOGIN_ROUTE } from "../utils/constrants.js";

const Login = () => {

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

  const handleLogin = async (userData) => {
    // console.log("form-data: ", userData);
    try {
      setloading(true);
      const {data, status} = await apiClient.post(LOGIN_ROUTE, userData, {
        headers: {
          "Content-Type": "application/json",
        }
      });
   
      if (data && status === 200) {
        dispatch(loginSuccess(data.accessToken));
        toast.success(data.message);
        navigate("/");
      }
      reset();
    } catch (error) {
      if (isAxiosError(error)) {
        console.log(error.response)
        toast.error(error.response.data.message);
      } else {
        toast.error(error.message);
        console.error("login error: ", error);
        return;
      }
      setloading(false);
    }finally{
      setloading(false);
    }
  };

  return (
    <>
        <div className="w-full min-h-screen lg:h-screen bg-gradient-to-br from-green-200 via-[#FFF9E3] to-[#faf5e4d2] overflow-x-hidden">
          <div className="w-full h-full flex justify-center items-center py-12 sm:py-16 lg:py-32 px-4 sm:px-6 md:px-14 lg:px-20 xl:px-28">
            <div className="lg:w-[80%] w-full h-full bg-green-200 rounded-2xl flex flex-col lg:flex-row justify-between shadow-lg shadow-emerald-300 overflow-hidden">
              {/* Form Section */}
              <div className="lg:w-[45%] w-full py-10 md:px-8 px-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center leading-snug">
                  Welcome Back to{" "}
                  <a href="/" className="text-[#06a751]">
                    Fasal Sarathi
                  </a>
                </h1>

                {/* Form */}
                <form
                  onSubmit={handleSubmit(handleLogin)}
                  className="mt-6 md:px-3 px-2 py-4"
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
                        className="px-3 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                        label={"Email"}
                      />
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
                        className="px-3 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                        label={"Password"}
                      />
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
                      className="bg-green-600 hover:bg-green-700 rounded-xl border-none px-6 py-2 text-base sm:text-lg md:text-xl w-full font-semibold text-white disabled:bg-green-400 disabled:cursor-not-allowed"
                      type={"submit"}
                      btnname={"Login"}
                      disabled={loading}
                    />
                  </div>
                </form>

                {/* Sign Up Redirect */}
                <div className="font-medium mt-4">
                  <p className="text-center text-sm sm:text-base">
                    Don&apos;t have an account?{" "}
                    <Link
                      to="/signup"
                      className="text-green-600 hover:text-green-700 font-bold"
                    >
                      Sign Up
                    </Link>
                  </p>
                </div>
              </div>

              {/* Image Section */}
              <div className="lg:w-[55%] hidden lg:block">
                <img
                  src={bgImg}
                  alt="Login illustration"
                  className="w-full h-full rounded-r-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Login;
