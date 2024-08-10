import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginCard = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const loginForm = async (e) => {
    e.preventDefault();

    const user = {
      username,
      password,
    };

    try {
      const response = await fetch("http://localhost:3500/auth/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        toast.success("User logged in");
        setUsername("");
        setPassword("");
        return navigate("/");
      } else {
        const data = await response.json();
        toast.error(data.message || "Login failed");
      }
    } catch (error) {
      toast.error("An error occured during login");
      console.log(error.message);
    }
  };

  return (
    <div className="my-28 mx-10 lg:mx-0 md:mx-28 w-[500px]">
      <form
        className="bg-base-100 p-14 shadow-xl rounded-xl"
        onSubmit={loginForm}
      >
        <h1 className="text-3xl font-medium text-center">SIGN IN</h1>
        <div className="grid grid-rows-2 gap-2 mt-10">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Username:</span>
            </div>
            <input
              type="text"
              className="input input-bordered w-full"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Password:</span>
            </div>
            <input
              type="password"
              className="input input-bordered w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="grid grid-rows-2 gap-2 mt-3">
          <div className="flex justify-between items-center">
            <div className="form-control">
              <label className="label cursor-pointer gap-2 items-center">
                <input type="checkbox" className="checkbox checkbox-xs" />
                <span className="label-text">Remember me</span>
              </label>
            </div>
            <div>
              <span className="label-text hover:underline hover:pointer hover:cursor-pointer">
                Forgot Password
              </span>
            </div>
          </div>
          <button className="btn btn-active">Sign in</button>
        </div>
      </form>
      <div className="text-end pr-1">
        <Link
          to="/register"
          className="label-text cursor-pointer hover:underline"
        >
          No account? Register now!
        </Link>
      </div>
    </div>
  );
};

export default LoginCard;
