import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";
import axios from "axios";
import SearchBar from "./SearchBar.jsx";

const Navbar = () => {
  const navigate = useNavigate();
  const { userData, setUserData } = useContext(UserContext);
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  const handleLogOut = async () => {
    await axios.post("/users/logout");
    setUserData(null);
    navigate("/login");
  };

  return (
    <nav className="bg-gray-900 w-full h-14 shadow-md px-12">
      <div className="grid grid-cols-9 h-full items-center justify-center">
        <div className="col-span-3 flex items-center">
          <Link className="text-white text-2xl font-medium pr-4" to="/">
            BookBuy
          </Link>
        </div>
        <div className="col-span-3 flex items-center justify-center">
          <SearchBar />
        </div>
        <div className="col-span-3 flex justify-end relative">
          <div className="mr-4 text-white cursor-pointer capitalize">
            {userData ? (
              <div className="group relative">
                <div className="">{userData.fullName}</div>
                <button
                  onClick={handleLogOut}
                  className="absolute top-6 left-5 z-10 bg-gray-900 py-2 px-4 hidden group-hover:block active:text-red-300"
                >
                  Logout
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
          <Link to="/cart" className="text-white">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </div>
            <span className="absolute bottom-2 -right-4 bg-yellow-400 rounded-full w-6 h-6 flex items-center justify-center text-red-900">
              {cartTotalQuantity}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
