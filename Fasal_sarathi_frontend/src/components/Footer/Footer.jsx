import React from "react";
import { Logo, Button } from "../index";
import footerLogo from "../../assets/footer-logo.jpg";
import { Link, useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  const navLink = [
    {
      id: 1,
      name: "Blog",
      path: "/#",
    },
    {
      id: 2,
      name: "Centers",
      path: "/#",
    },
    {
      id: 3,
      name: "Feedback",
      path: "/#",
    },
    {
      id: 4,
      name: "policy",
      path: "/#",
    },
    {
      id: 5,
      name: "terms & conditions",
      path: "/#",
    },
    
  ];

  return (
   
    <div className="bg-[#055c43] pt-4 pb-4 px-3 w-full">

  <div className="flex flex-col md:flex-row justify-center md:justify-around items-center w-full lg:w-[80%] mx-auto">

    <div className="w-32 md:w-40 mb-4 md:mb-0">
      <Link to={"/"}>
        <Logo className={"w-full h-auto"} imgUrl={footerLogo} />
      </Link>
    </div>

    <div className=" w-full md:w-auto flex justify-center md:justify-end">
      <ul className="flex gap-4 md:gap-6 lg:gap-8 flex-wrap justify-start md:font-semibold text-center text-sm lg:text-xl ">
        {navLink.map(({ id, name, path }) => {
          return (
            <li key={id} className="text-white hover:underline cursor-pointer">
              <Link to={path}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
    <div>
    <Button
                btnname="Click Here"
                className="bg-[#0f944d] rounded-full border-none px-5 lg:px-7 py-3 text-sm lg:text-xl font-semibold text-white hover:bg-[#034633FF] hidden md:flex items-center justify-center "
                onClickHandler={() => {
                  navigate("/user-input-form");
                }}
                />
    </div>
  </div>

 
  <div className="mt-4 md:mt-[-10px] lg:mt-[-35px]">
    <div className="lg:w-[80%] w-full mx-auto">
      <p className="text-white text-center text-sm md:text-base lg:text-lg font-normal md:font-semibold">
        Copyright © 2024. All rights reserved by Fasal Sarathi.
      </p>
    </div>
  </div>
</div>

  );
};

export default Footer;
