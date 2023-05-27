import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
    showPassword: false,
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/users/register", user);
      toast.success(response.data.message);
      navigate("/login");
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Failed to register user. Please try again.");
      }
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-[40%] bg-white shadow-lg flex flex-col items-center p-4 rounded-lg mt-16">
        <h2 className="text-2xl mb-4">Register</h2>
        <div className="w-full">
          <form
            className="flex flex-col items-center w-full"
            onSubmit={handleSubmit}
          >
            <input
              className="mb-2 p-2 border w-full outline-none rounded-lg"
              type="text"
              name="fullName"
              value={user.fullName}
              onChange={handleChange}
              placeholder="Full Name"
            />
            <input
              className="mb-2 p-2 border w-full outline-none rounded-lg"
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Email"
            />
            <input
              className="mb-2 p-2 border w-full outline-none rounded-lg"
              type={user.showPassword ? "text" : "password"}
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Password"
            />
            <label className="mb-2 flex items-center">
              <input
                className="mr-1"
                type="checkbox"
                name="showPassword"
                checked={user.showPassword}
                onChange={() =>
                  setUser({ ...user, showPassword: !user.showPassword })
                }
              />
              Show Password
            </label>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
              type="submit"
            >
              Register
            </button>
          </form>
        </div>
        <Link className="mt-4 text-blue-500" to="/login">
          Already have an account? Login
        </Link>
      </div>
    </div>
  );
};

export default Register;
