import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
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
      const response = await axios.post("/users/login", user, {
        withCredentials: true,
        credentials: "include",
      });
      toast.success(response.data.message);
      // if response is success
      if (response.status === 200) {
        navigate("/profile");
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Failed to login. Please try again.");
      }
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-[40%] flex flex-col items-center bg-white shadow-md p-4 rounded-lg">
        <h2 className="text-2xl mb-4">Login</h2>
        <div className="w-full">
          <form className="flex flex-col items-center" onSubmit={handleSubmit}>
            <input
              className="mb-2 p-2 border w-full rounded-lg outline-none"
              type="email"
              name="email"
              autoComplete="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Email"
            />
            <input
              className="mb-2 p-2 border w-full rounded-lg outline-none"
              type={user.showPassword ? "text" : "password"}
              name="password"
              autoComplete="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Password"
            />
            <label className="mb-4 flex items-center mt-4">
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
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
        <Link className="mt-4 text-blue-500" to="/register">
          Don't have an account? Register
        </Link>
      </div>
    </div>
  );
};

export default Login;
