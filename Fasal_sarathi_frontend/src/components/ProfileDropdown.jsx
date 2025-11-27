// import { useState, useRef, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { logout } from "../redux/slice/authThunk";
// import { useDispatch } from "react-redux";
// import { apiClient } from "../lib/api-client";
// // import profile_pic from "../assets/Profile_pic.png";
// import { CURRENT_USER_ROUTES } from "../utils/constrants";

// const ProfileDropdown = () => {
//     const dispatch = useDispatch();
    
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [userData, setUserData] = useState({});
//   const dropdownRef = useRef(null);


//   const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

//   // Close dropdown when clicking outside
//   const handleClickOutside = (e) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//       setDropdownOpen(false);
//     }
//   };

//   // Effect to handle outside click
// useEffect(() => {
//     if (dropdownOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [dropdownOpen]);

 
// useEffect(() => {
//   (async () =>{
//     try {
//       const userdata = await apiClient.get(CURRENT_USER_ROUTES, {
//         withCredentials: true,
//       });
//       if(userdata.data)
//         {
//           setUserData(userdata.data.user);
          
//         } 
//       console.log( userdata.data.user );
      
//     } catch (error) {
//       console.log("userdata error", error);
//     }
//   })();

// }, []);



//   return (
//     <div className="relative inline-block text-left">
//       {/* Profile Picture */}
//       <div onClick={toggleDropdown} className="cursor-pointer flex items-center space-x-2 border-2 border-green-500 rounded-full ">
//         <img
//           src={userData ? userData?.picture : "https://lh3.googleusercontent.com/ogw/AF2bZyhKTjLD9n91GRSrFuDUz5_8jLwZamHI0LEj4xnKk15faA=s32-c-mo"}
//           alt="Profile"
//           className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-4 border-white"
//         />
//         <span className="hidden md:block text-lg font-semibold text-gray-700 pr-3">{userData?.fullName?.split(" ")[0]}</span>
//       </div>

//       {/* Dropdown */}
//       {dropdownOpen && (
//         <div
//           ref={dropdownRef}
//           className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
//         >
//           <div className="py-1">
//             <Link
//               to="/dashboard"
//               className="block px-4 py-2  text-lg text-gray-700  hover:bg-gray-100 font-medium"
//             >
//               Dashboard
//             </Link>
//             <button
//               onClick={() => dispatch(logout())}
//               className="w-full text-left px-4 py-2 text-lg  text-red-600 hover:bg-gray-100 font-medium"
//             >
//               Logout
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProfileDropdown;
