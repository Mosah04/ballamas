import React from "react";
import { Link } from "react-router-dom";
import SuperInput from "@components/SuperInput";
import Button from "@components/Button";

const Footer = () => {
  return (
    <footer className="sticky bottom-0 w-full text-b-gray bg-b-black md:py-10 py-5 lg:px-16 md:px-8 px-2">
      <div className="flex max-md:flex-col justify-between gap-6">
        <div className="flex flex-col gap-3">
          <span className="text-3xl font-chillax text-b-black strokeWhite uppercase">
            Ballamas
          </span>
          <p className="text-xs">
            Suscribe to our newsletter for upcoming products and best discount
            for all items
          </p>
          <div className="flex gap-2 w-fit justify-between">
            <SuperInput
              darkTheme={false}
              type="email"
              placeholder="Your email"
              className="text-xs w-2/3 md:min-w-[250px]"
            />
            <Button className="px-8 text-xs font-bold" darkTheme={false}>
              Subscribe
            </Button>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="flex flex-col">
            <h2 className="font-semibold text-white">Product</h2>
            <Link to={""} className="text-xs font-extralight">
              Jacket
            </Link>
            <Link to={""} className="text-xs font-extralight">
              T-Shirt
            </Link>
            <Link to={""} className="text-xs font-extralight">
              Jacket
            </Link>
            <Link to={""} className="text-xs font-extralight">
              Shoes
            </Link>
            <Link to={""} className="text-xs font-extralight">
              Sunglasses
            </Link>
          </div>
          <div className="flex flex-col">
            <h2 className="font-semibold text-white">Categories</h2>
            <Link to={""} className="text-xs font-extralight">
              Man
            </Link>
            <Link to={""} className="text-xs font-extralight">
              Woman
            </Link>
            <Link to={""} className="text-xs font-extralight">
              Kids
            </Link>
            <Link to={""} className="text-xs font-extralight">
              Gift
            </Link>
            <Link to={""} className="text-xs font-extralight">
              New arrival
            </Link>
          </div>
          <div className="flex flex-col">
            <h2 className="font-semibold text-white text-nowrap">
              Our Social Media
            </h2>
            <Link to={""} className="text-xs font-extralight">
              Instagram
            </Link>
            <Link to={""} className="text-xs font-extralight">
              Facebook
            </Link>
            <Link to={""} className="text-xs font-extralight">
              Youtube
            </Link>
            <Link to={""} className="text-xs font-extralight">
              X
            </Link>
          </div>
        </div>
      </div>
      <p className="mt-6 text-center text-xs">
        © BALLAMAS {new Date().getFullYear()} by Mosah
      </p>
    </footer>
  );
};

export default Footer;
