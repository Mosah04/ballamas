import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ message = true }) => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 w-full">
      {message && (
        <div className="text-white text-center text-xs w-full bg-b-black py-2">
          Sign up and get 20% off for all new arrivals collection
        </div>
      )}
      <nav className="lg:px-16 md:px-8 px-2">
        <div className="max-md:hidden py-2 flex justify-between items-center border-b border-b-light-gray">
          <div className="flex gap-2 items-center">
            <Link to={""}>Men</Link>
            <Link to={""}>Women</Link>
            <Link to={""}>Kids</Link>
            <Link to={""}>Collection</Link>
          </div>
          <Link
            to={"/"}
            className="text-3xl font-chillax text-white strokeBlack uppercase"
          >
            Ballamas
          </Link>
          <div className="flex gap-2 items-center">
            <Link to={""}>Shop</Link>
            <Link to={""}>About Us</Link>
            <Link to={""} className="flex gap-1 items-center">
              <img src="/assets/icons/user.svg" alt="User" />
              Account
            </Link>
            <Link to={"/cart"}>Cart (0)</Link>
            <Link to={""}>
              <img src="/assets/icons/search.svg" alt="Search" />
            </Link>
          </div>
        </div>
        <div className="md:hidden py-2 flex justify-between items-center border-b border-b-light-gray relative">
          <button
            className="relative w-10 h-10"
            type="button"
            onClick={() => {
              setNavOpen((navOpen) => !navOpen);
            }}
          >
            <div id="icon" className={navOpen && "close"}>
              <span className="lines"></span>
            </div>
          </button>
          <span className="text-3xl font-chillax text-white strokeBlack uppercase">
            Ballamas
          </span>
          <div className="flex gap-2 items-center">
            <Link to={""}>
              <img src="/assets/icons/search.svg" alt="Search" />
            </Link>
            <Link to={"/cart"}>
              <img src="/assets/icons/cart-2.svg" alt="Search" />
            </Link>
          </div>
          {navOpen && (
            <div className="absolute bg-white mt-1 z-40 top-full left-0 max-h-[80vh] overflow-y-auto w-full flex flex-col py-4 gap-4">
              <div className="flex flex-col items-center gap-4">
                <Link to={""}>Men</Link>
                <Link to={""}>Women</Link>
                <Link to={""}>Kids</Link>
                <Link to={""}>Collection</Link>
                <Link to={""}>Shop</Link>
                <Link to={""}>About Us</Link>
                <Link to={""} className="flex gap-1 items-center">
                  <img src="/assets/icons/user.svg" alt="User" />
                  Account
                </Link>
              </div>
              <div className="pt-4 flex items-center flex-col">
                <Link to={""}>FAQ</Link>
                <Link to={""}>Contact Us</Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
