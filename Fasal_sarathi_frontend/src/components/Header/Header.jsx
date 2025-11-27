import { useState } from 'react';
import { Button, Logo } from "../index.js";
import { Link, useNavigate, useLocation } from "react-router-dom";
import headerLogo from "../../assets/logo-img2.png";
import { useSelector } from 'react-redux';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  // const accessToken = localStorage.getItem('accessToken');
  const {isAuthenticated} = useSelector((state) => state.auth);

  const navLink = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Predict",
      path: "/user-input-form",
    },
    {
      id: 3,
      name: "Feedback",
      path: "/feedback",
    },
    {
      id: 4,
      name: "Gallery",
      path: "/gallery",
    },
  ];

  return (
    <div className="w-full p-3 xl:px-32 lg:px-16 md:px-8 sticky top-0 backdrop-blur-sm z-50 bg-transparent">
      <div className="flex justify-between items-center">

        <div className="flex-shrink-0">
          <Link to={"/"}>
            <Logo className={"w-24 h-20"} imgUrl={headerLogo} />
          </Link>
        </div>

        
        <div className="md:hidden">
          <button
            className="text-black focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
           
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              ></path>
            </svg>
          </button>
        </div>


        <div className="hidden md:flex">
          <ul className="flex gap-10 justify-center items-center font-medium lg:text-xl">
            {navLink.map(({ id, name, path }) => {
               const isActive = location.pathname === path;
              return (
                <li
                  key={id}
                  className={`text-[#06a751] 
                                ${
                                 isActive
                                    ? "underline decoration-4 underline-offset-8 text-[#06a751] transition-all"
                                    : " hover:text-[#1ba84a] text-black"
                                } 
                                `}
                >
                  <Link to={path} onClick={() => handleActive(id)}>
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="hidden md:block">
              <Button
              btnname={isAuthenticated ? "Dashboard" : "Login"}
              className={
                "bg-[#0b6836] rounded-full border-none md:px-6 md:py-2 lg:px-8 lg:py-3 text-xl flex items-center justify-center lg:font-medium text-white hover:bg-[#034633FF] "
              }
              onClickHandler={() => {
                if (isAuthenticated) {
                  navigate("/dashboard");
                } else {
                  navigate("/login");
                }
              }}
            /> 
        </div>
      </div>

    
      {isMobileMenuOpen && (
        <div className="md:hidden mt-3">
          <ul className="flex flex-col gap-4 items-center">
            {navLink.map(({ id, name, path }) => {
              const isActive = location.pathname === path;
              return (
                <li
                  key={id}
                  className={`text-[#06a751] 
                                ${
                                  isActive
                                    ? "underline decoration-4 underline-offset-8 text-[#06a751] transition-all"
                                    : " hover:text-[#1ba84a] text-black"
                                } 
                                `}
                >
                  <Link to={path} onClick={() => { 
                    handleActive(id); 
                    setIsMobileMenuOpen(false); 
                  }}>
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>

        
          <div className="mt-4 flex justify-center">
             <Button
              btnname={isAuthenticated ? "Dashboard" : "Login"}
              className={
                "bg-[#0b6836] rounded-full border-none md:px-6 md:py-2 lg:px-8 lg:py-3 text-xl flex items-center justify-center lg:font-medium text-white hover:bg-[#034633FF] "
              }
              onClickHandler={() => {
                if (isAuthenticated) {
                  navigate("/dashboard");
                } else {
                  navigate("/login");
                }
              }}
            /> 
          
           
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
