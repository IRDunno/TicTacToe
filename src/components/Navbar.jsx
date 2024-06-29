import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 border-b border-slate-700">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">Homepage</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/other-works">Other Works</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link to="/" className="btn btn-ghost text-xl">TicTacToe</Link>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <div className="avatar placeholder">
            <div className="bg-neutral text-neutral-content w-8 rounded-full">
              <span className="text-sm">UI</span>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
