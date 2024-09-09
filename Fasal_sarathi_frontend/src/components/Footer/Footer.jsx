import React from "react";
import { Logo } from "../index";
import footerLogo from "../../assets/footer-logo.jpg";
import { Link } from "react-router-dom";
const Footer = () => {
  const navLink = [
    
    {
      id: 1,
      name: "Blog",
      path: "/#",
    },
    {
      id: 2,
      name: "History",
      path: "/#",
    },
    {
      id: 3,
      name: "Centers",
      path: "/#",
    },
    {
      id: 4,
      name: "Feedback",
      path: "/#",
    },
    {
      id: 5,
      name: "terms and conditions",
      path: "/#",
    },
    {
      id: 6,
      name: "policy",
      path: "/#",
    },
  ];

  return (
    <div className="bg-[#055c43] p-10 w-full">
      <div className="flex justify-around items-center w-[80%]">
        <div>
          <Logo className={"w-36 h-32"} imgUrl={footerLogo} />
        </div>

        <div className="flex">
          <ul className="flex gap-8 justify-center items-center font-semibold ">
            {navLink.map(({ id, name, path }) => {
              return (
                <li
                  key={id}
                  className={`text-white hover:underline cursor-pointer`}
                >
                  <Link to={path}>
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="mt-[-6px]">
        <div className="w-[80%] m-auto">
        <p className="text-white text-center font-semibold ml-10">
          Copyright © 2024. All rights reserved by Fasal Sarathi.
        </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
