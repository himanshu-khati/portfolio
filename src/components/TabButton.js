import React from "react";
import { motion } from "framer-motion";
const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};
const TabButton = ({ title, active }) => {
  const buttonClasses = active ? "text-gray-200 " : "text-[#adb7be]";
  return (
    <div
      className={`mr-3 font-semibold text-lg hover:text-gray-200 cursor-pointer ${buttonClasses}`}
    >
      {title}
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-purple-500 mt-1 mr-3"
      ></motion.div>
    </div>
  );
};

export default TabButton;
