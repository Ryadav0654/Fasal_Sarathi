import React,{ useState } from 'react';
import { Button, Logo, ProfileDropdown } from "../index.js";
import { Link, useNavigate } from "react-router-dom";
import headerLogo from "../../assets/logo.png";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/slice/authThunk.js';
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.auth.accessToken);
  const handleActive = (id) => {
    setActiveLink(id);
  };

  const navLink = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Blogs",
      path: "/#",
    },
    {
      id: 3,
      name: "History",
      path: "/history",
    },
    {
      id: 4,
      name: "Centers",
      path: "/#",
    },
    {
      id: 5,
      name: "Feedback",
      path: "/#",
    },
  ];

  return (
    <div className="w-full p-3 xl:px-32 lg:px-16 md:px-8 sticky top-0 backdrop-blur-sm z-50">
      <div className="flex justify-between items-center">

        <div className="flex-shrink-0">
          <Link to={"/"}>
            <Logo className={"w-28 h-24"} imgUrl={headerLogo} />
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
              return (
                <li
                  key={id}
                  className={`text-[#06a751] 
                                ${
                                  activeLink === id
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
          {
            accessToken ? (
            //    <Button
            //   btnname="Logout"
            //   className={
            //     "bg-[#0b6836] rounded-full border-none md:px-6 md:py-2 lg:px-8 lg:py-3 text-xl flex items-center justify-center lg:font-medium text-white hover:bg-[#034633FF] "
            //   }
            //   onClickHandler={() => dispatch(logout())}
            // />
            <ProfileDropdown />
          ):
            (
              <Button
              btnname="Login"
              className={
                "bg-[#0b6836] rounded-full border-none md:px-6 md:py-2 lg:px-8 lg:py-3 text-xl flex items-center justify-center lg:font-medium text-white hover:bg-[#034633FF] "
              }
              onClickHandler={() => navigate("/login")}
            />
            )
          }
         
        </div>
      </div>

    
      {isMobileMenuOpen && (
        <div className="md:hidden mt-3">
          <ul className="flex flex-col gap-4 items-center">
            {navLink.map(({ id, name, path }) => {
              return (
                <li
                  key={id}
                  className={`text-[#06a751] 
                                ${
                                  activeLink === id
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
            {
              (!accessToken) ? ( 
              <Button
              btnname="Login"
              className={
                "bg-[#0b6836] rounded-full border-none px-6 py-2 text-lg text-white hover:bg-[#034633FF] "
              }
              onClickHandler={() => {
                navigate("/login");
                setIsMobileMenuOpen(false); 
              }}
            />
          ) :
            (
              <ProfileDropdown />
            // <Button
            //   btnname="Logout"
            //   className={
            //     "bg-[#0b6836] rounded-full border-none px-6 py-2 text-lg text-white hover:bg-[#034633FF] "
            //   }
            //   onClickHandler={() => {
            //     dispatch(logout());
            //     setIsMobileMenuOpen(false); 
            //   }}
            // />
          )
            }
           
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
