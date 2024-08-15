import React from "react";
import Button from "@components/Button";
import { Link } from "react-router-dom";

const Article = ({ badgeOn = false }) => {
  return (
    <Link to={"/product/1"}>
      <div className="inline-flex flex-col w-fit">
        <div className="relative rounded-xl overflow-hidden aspect-article w-[300px]">
          <img className="w-full" src="/assets/article.png" alt="Article" />
          <div className="absolute top-0 left-0 p-3 h-full w-full hover:bg-b-black/25 flex flex-col justify-between transition-colors duration-300 group">
            <div
              className={`${
                badgeOn ? "opacity-100" : "opacity-0"
              } group-hover:opacity-100 transition-opacity duration-300`}
            >
              <Button
                className="w-fit text-xs uppercase font-medium py-1 px-2"
                darkTheme={false}
              >
                Get off 20%
              </Button>
            </div>
            <div
              className={`w-full flex gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
            >
              <Button
                className="w-fit font-medium p-2 flex-1"
                darkTheme={false}
              >
                <img src="/assets/icons/cart.svg" alt="Cart" />
              </Button>
              <Button
                className="w-fit text-xs uppercase font-medium p-2 flex-1"
                outlined
                transparent
              >
                Buy now
              </Button>
            </div>
          </div>
        </div>
        <span className="uppercase font-bold mt-2">SUMMER SHIRT</span>
        <span className="text-b-dark-gray m-0">$99</span>
      </div>
    </Link>
  );
};

export default Article;
