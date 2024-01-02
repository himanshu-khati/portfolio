import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
const RootLayout = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div className="container mx-auto px-4 sm:px-12 ">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </main>
  );
};

export default RootLayout;
