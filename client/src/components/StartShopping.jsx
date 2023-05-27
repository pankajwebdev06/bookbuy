import React from "react";
import { Link } from "react-router-dom";

const StartShopping = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-6">
      <p className="font-medium">Your Cart is Currently Empty!</p>
      <Link to="/" className="flex mt-4 bg-blue-500 py-2 px-4 rounded-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-white mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
        <span className="text-white">Continue Shopping</span>
      </Link>
    </div>
  );
};

export default StartShopping;
