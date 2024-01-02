import React from "react";
import { Link } from "react-router-dom";
import { NAVLINKS } from "../utils/constants";
import NavLinks from "./NavLinks";
import MenuOverlay from "./MenuOverlay";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const handleMenuClick = () => {
    dispatch(toggleMenu());
  };
  return (
    <nav className=" sticky z-50 top-0 bg-[#121212] bg-opacity-100">
      <div className="flex  container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <a href="/">
          <p className="text-2xl md:text-3xl lg:text-5xl text-gray-200 font-semibold">
            LOGO
          </p>
        </a>

        <div
          className="mobile-menu block md:hidden "
          onMouseDown={() => handleMenuClick()}
        >
          {isMenuOpen ? (
            <button className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-gray-200 hover:border-gray-200">
              <XMarkIcon className="h-5 w-5" />
            </button>
          ) : (
            <button className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-gray-200 hover:border-gray-200">
              <Bars3Icon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu text-[#adb7be] sm:text-xl hidden md:block ">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {NAVLINKS.map((item) => {
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
      </div>
      {isMenuOpen ? <MenuOverlay links={NAVLINKS} /> : null}
    </nav>
  );
};

export default Navbar;
