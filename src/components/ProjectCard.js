import React from "react";
import {
  CodeBracketIcon,
  EyeIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const ProjectCard = ({ imgUrl, title, description, previewUrl, gitUrl }) => {
  return (
    <div className="text-gray-200 w-full  lg:w-6/12 mb-5 sm:mb-0">
      <div className=" p-0 sm:p-5">
        <div
          className="h-52 md:h-72 rounded-t-xl relative group"
          style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
        >
          <div className="overlay  absolute h-full top-0 left-0 w-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500  justify-center items-center ">
            <Link
              to={gitUrl}
              className="h-14 w-14 border-2 relative rounded-full border-[#adb7be] hover:border-gray-200 flex justify-center items-center mx-2"
            >
              <CodeBracketIcon className="h-10 w-10 text-[#adb7be] hover:text-gray-200 m-2 cursor-pointer " />
            </Link>
            <Link
              to={previewUrl}
              className="h-14 w-14 border-2 relative rounded-full border-[#adb7be] hover:border-gray-200 flex justify-center items-center mx-2"
            >
              <EyeIcon className="h-10 w-10 text-[#adb7be] hover:text-gray-200 m-2 cursor-pointer  " />
            </Link>
            <Link
              to={previewUrl}
              className="h-14 w-14 border-2 relative rounded-full border-[#adb7be] hover:border-gray-200 flex justify-center items-center mx-2"
            >
              <DocumentTextIcon className="h-10 w-10 text-[#adb7be] hover:text-gray-200 m-2 cursor-pointer  " />
            </Link>
          </div>
        </div>
        <div className="text-gray-200 rounded-b-xl  bg-[#181818] py-6 px-4">
          <h5 className="text-xl font-semibold mb-2">{title}</h5>
          <p className="text-[#adb7be]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
