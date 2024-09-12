import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, register as signup } from "../redux/slice/authThunk";
import { useNavigate } from "react-router-dom";
import { ErrorPage, LoadingPage } from "../components/index.js";

const Signup = () => {
  // Use React Hook Form
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [loading, setloading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Signup Data: ", data);
    setError(false);
    setloading(true);
    if (!data.email || !data.fullName || !data.password) {
      console.error("Missing required fields");
      return;
    }

    const { fullName, email, password } = data;
    try {
     
      const response = await dispatch(signup({ fullName, email, password }));
      console.log("register_response: ", response);
      if (response) {
        const login_res = await dispatch(login({ email, password }));
        if (login_res){
          setloading(false);
          navigate("/");
        } 
        console.log("login_response: ", login_res);
      }
    } catch (error) {
      setError(true);
      setloading(false);
      console.error("register error: ", error);
    }
  };

  const password = watch("password");

  return (
    <>
      {loading && <LoadingPage />}
      {error ? (
        <ErrorPage />
      ) : (
        <div className="flex justify-center items-center min-h-screen bg-green-50">
          <div className="w-full max-w-md bg-green-200 shadow-lg rounded-lg p-8 md:p-10">
            <h2 className="text-3xl font-extrabold text-center text-black mb-6">
              Fasal Sarathi - Sign Up
            </h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label
                  htmlFor="fullName"
                  className="block font-semibold text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  {...register("fullName", { required: "Name is required" })}
                  className={`w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                    errors.fullName ? "border-red-500" : ""
                  }`}
                  placeholder="Enter your fullname"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block font-semibold text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className={`w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block font-semibold text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  className={`w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                    errors.password ? "border-red-500" : ""
                  }`}
                  placeholder="Enter your password"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="confirmPassword"
                  className="block font-semibold text-gray-700"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  {...register("confirmPassword", {
                    required: "Confirm Password is required",
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  })}
                  className={`w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                    errors.confirmPassword ? "border-red-500" : ""
                  }`}
                  placeholder="Confirm your password"
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3 mt-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Sign Up
              </button>
            </form>

            <p className="mt-6 text-center text-gray-700">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-green-600 hover:text-green-700 font-bold"
              >
                Log In
              </Link>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Signup;
