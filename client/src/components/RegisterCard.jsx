import React, { useState } from "react";
import { Link } from "react-router-dom";

const RegisterCard = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const registerForm = (e) => {
    e.preventDefault();

    const newUser = {
      username,
      password,
    };
  };

  return (
    <div className="my-28 mx-10 lg:mx-0 md:mx-28 w-[500px]">
      <form
        className="bg-base-100 p-14 shadow-xl rounded-xl"
        onSubmit={registerForm}
      >
        <h1 className="text-3xl font-medium text-center">REGISTER</h1>
        <div className="grid grid-rows-2 gap-2 mt-10">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Username:</span>
            </div>
            <input
              type="text"
              value={username}
              className="input input-bordered w-full"
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Password:</span>
            </div>
            <input
              type="password"
              value={password}
              className="input input-bordered w-full"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <div className="grid grid-rows-1 mt-3">
          <button className="btn btn-active">Register</button>
        </div>
      </form>
      <div className="text-end pr-1">
        <Link
          to="/login"
          className="label-text cursor-pointer hover:underline"
        >
          Alreay has an account? Sign in!
        </Link>
      </div>
    </div>
  );
};

export default RegisterCard;
