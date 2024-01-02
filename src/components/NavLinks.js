import React from "react";
import { Link } from "react-scroll";
// import { Link } from "react-router-dom";

const NavLinks = ({ link, title }) => {
  return (
    <Link
      to={link}
      smooth={true}
      spy={true}
      offset={-77}
      duration={500}
      className="cursor-pointer"
    >
      {title}
    </Link>
  );
};

export default NavLinks;
