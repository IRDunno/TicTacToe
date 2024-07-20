import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Navbar />
      <div className="content">
        <ToastContainer theme="dark" />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
