import React from "react";
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    path: "/", // will use <Link>
  },
  {
    id: 2,
    title: "Services",
    link: "#services", // anchor scroll
  },
  {
    id: 3,
    title: "About Us",
    link: "#about-us", // anchor scroll
  },
  {
    id: 4,
    title: "Contact Us",
    path: "/contact", // will use <Link>
  },
];

const Navbar = () => {
  return (
    <nav className="relative z-20 border-b border-gray-200 bg-white">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container py-10 flex justify-between items-center"
      >
        <div className="font-serifDisplay text-xl font-bold text-black lg:text-4xl">
          Aurora
        </div>

        <div className="hidden lg:block font-lato">
          <ul className="flex items-center gap-5">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                {menu.path ? (
                  <Link
                    to={menu.path}
                    className="inline-block py-2 px-3 hover:text-secondary relative group font-bold"
                  >
                    <div className="w-2 h-2 bg-secondary absolute mt-4 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                    {menu.title}
                  </Link>
                ) : (
                  <a
                    href={menu.link}
                    className="inline-block py-2 px-3 hover:text-secondary relative group font-bold"
                  >
                    <div className="w-2 h-2 bg-secondary absolute mt-4 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                    {menu.title}
                  </a>
                )}
              </li>
            ))}
            {/* Buttons */}
            <Link to="/login">
              <button className="primary-btn">Login</button>
            </Link>
            <Link to="/signup">
              <button className="primary-btn">Sign Up</button>
            </Link>
          </ul>
        </div>

        <div className="lg:hidden">
          <IoMdMenu className="text-4xl" />
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
