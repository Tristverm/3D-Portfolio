/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../../src/constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex flex-row items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="./"
          className="flex flex-row items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="w-12 h-12 object-contain rounded-full"
          ></img>
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Emmanuel <span className="sm:block hidden "> Portfolio </span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-8">
          {navLinks.map((link) => {
            return (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
              >
                <a
                  href={`#${link.id}`}
                  onClick={() => {
                    setActive(link.title);
                  }}
                >
                  {link.title}
                </a>
              </li>
            );
          })}
        </ul>
        {/* Mobile Navigation Bar */}

        <div className="sm:hidden flex flex-1 justify-end items-center ">
          <img
            src={toggle === false ? menu : close}
            alt="Menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => {
              setTimeout(() => {
                setToggle(!toggle);
              }, 100);
            }}
          ></img>
          {toggle === true && (
            <div className="border-2 flex p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl">
              <ul className="list-none flex flex-col gap-4 items-center justify-end">
                {navLinks.map((link) => {
                  return (
                    <li
                      key={link.id}
                      className={`${
                        active === link.title ? "text-white" : "text-secondary"
                      } hover:text-white font-poppins text-[16px] font-medium cursor-pointer`}
                    >
                      <a
                        href={`#${link.id}`}
                        onClick={() => {
                          setActive(link.title);
                        }}
                      >
                        {link.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
