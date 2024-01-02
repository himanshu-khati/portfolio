import React from "react";
// import { NAVLINKS } from "../utils/constants";
import NavLinks from "./NavLinks";
const MenuOverlay = ({ links }) => {
  return (
    <div className="block md:hidden">
      <ul className="flex flex-col py-4 items-center ">
        {links.map((item) => {
          return (
            <li
              key={item.id}
              className=" py-2 pr-4 md:p-0  text-[#adb7be] hover:text-gray-200 md:text-xl   text-lg"
            >
              <NavLinks link={item.path} title={item.title} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MenuOverlay;
