import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { logout } from "../redux/slice/authThunk";
import { useDispatch, useSelector } from "react-redux";

const ProfileDropdown = () => {
    const dispatch = useDispatch();
    
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);


  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  // Close dropdown when clicking outside
  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropdownOpen(false);
    }
  };

  // Effect to handle outside click
useEffect(() => {
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownOpen]);

 

  return (
    <div className="relative inline-block text-left">
      {/* Profile Picture */}
      <div onClick={toggleDropdown} className="cursor-pointer flex items-center space-x-2 border-2 border-green-500 rounded-full ">
        <img
          src={  "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg"}
          alt="Profile"
          className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-green-500"
        />
        <span className="hidden md:block text-lg font-semibold text-gray-700 pr-3">{"Ravindra"}</span>
      </div>

      {/* Dropdown */}
      {dropdownOpen && (
        <div
          ref={dropdownRef}
          className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
        >
          <div className="py-1">
            <Link
              to="/#"
              className="block px-4 py-2  text-lg text-gray-700  hover:bg-gray-100 font-medium"
            >
              Dashboard
            </Link>
            <button
              onClick={() => dispatch(logout())}
              className="w-full text-left px-4 py-2 text-lg  text-red-600 hover:bg-gray-100 font-medium"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
