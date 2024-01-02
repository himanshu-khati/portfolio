import React from "react";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Projects from "../components/Projects";
import Connect from "../components/Connect";

const HomeLayout = () => {
  return (
    <>
      <HeroSection  />
      <Projects />
      <About />
      <Connect />
    </>
  );
};

export default HomeLayout;
