import React from "react";
import myimg from "../assets/images/pic.jpg";
import { TypeAnimation } from "react-type-animation";
import pdf from "../assets/resume/resume.pdf";
import { motion } from "framer-motion";

const HeroSection = () => {
  const handleDownloadCv = () => {
    const link = document.createElement("a");
    link.href = pdf;
    link.download = "Himanshu_Khati_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="lg:py-16 md:px-0 md:py-12 px-6 py-8">
      <div className="w-full flex md:flex-row flex-col">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="md:w-8/12 w-full flex flex-col justify-center text-center md:text-left"
        >
          <h1 className="text-gray-200 mb-4 text-4xl sm:text-5xl lg:text-7xl xl:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello I'm <br />
            </span>
            <TypeAnimation
              sequence={["Himanshu", 1000, "Web Developer", 1000]}
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#adb7be] text-base sm:text-lg lg:text-xl mb-6">
            Building Exceptional Digital Solutions with Full-Stack Expertise,
            from Backend Ingenuity to Frontend Elegance
          </p>
          <div>
            <button
              className="px-6 py-3 w-full sm:w-fit mb-3 md:mb-0 rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-gray-200"
              onClick={(e) => {
                window.location.href = "mailto:himanshukhati@gmail.com";
                e.preventDefault();
              }}
            >
              Hire Me
            </button>
            <button
              className="px-1 py-1 w-full sm:w-fit mb-2 md:mb-0 rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-gray-200"
              onClick={handleDownloadCv}
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download Resume
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="md:w-4/12 w-full mt-4 sm:mt-6 md:mt-0  flex justify-center items-center"
        >
          <img
            src={myimg}
            alt="ok"
            className="rounded-full h-[250px] w-[250px] md:h-[220px] md:w-[220px] lg:h-[300px] lg:w-[300px] xl:[h-500px] xl-[w-500px]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
