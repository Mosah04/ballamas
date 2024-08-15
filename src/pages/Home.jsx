import React from "react";
import Button from "@components/Button";
import Article from "@components/Article";

const Home = () => {
  return (
    <div className="space-y-12">
      <div className="py-14 px-10 flex flex-col gap-4 items-center text-white bg-[url('../public/assets/hero-bg.png')] bg-center bg-cover rounded-3xl text-center">
        <span className="text-xs lineAside">
          We bring new fashion to the world
        </span>
        <h1 className="font-chillax text-4xl font-extrabold uppercase">
          Discover the latest fashion trends here
        </h1>
        <p className="text-sm">
          Discover a world of fashion with our meticulously curated outfits.
          Shop now to update your wardrobe with chic and stylish outfits.
        </p>
        <div className="flex">
          <Button darkTheme={false} className="px-3 py-4 font-bold">
            Start shopping
          </Button>
          <Button darkTheme={false} className="p-4  flex-shrink-0">
            <img
              className="aspect-square"
              src="/assets/icons/arrow.svg"
              alt="Outside link"
            />
          </Button>
        </div>
      </div>
      <p className="text-center font-bold font-chillax">
        Discover the latest trends in summer fashion. Shop now and refresh your
        wardrobe with our stylish summer shirts.
      </p>
      <div className="space-y-4">
        <div className="flex flex-wrap sm:justify-center gap-3">
          <Button darkTheme={true} className="px-3 py-2 font-medium gap-2">
            All <span className="text-sm">132</span>
          </Button>
          <Button
            darkTheme={false}
            outlined={true}
            className="px-3 py-2 font-medium gap-2"
          >
            Accessories <span className="text-sm">13</span>
          </Button>
          <Button
            darkTheme={false}
            outlined={true}
            className="px-3 py-2 font-medium gap-2"
          >
            Featured <span className="text-sm">67</span>
          </Button>
          <Button
            darkTheme={false}
            outlined={true}
            className="px-3 py-2 font-medium gap-2"
          >
            Unisex <span className="text-sm">52</span>
          </Button>
        </div>
        <div className="w-full flex flex-wrap gap-2 justify-center">
          <Article badgeOn />
          <Article badgeOn />
          <Article />
          <Article />
          <Article />
          <Article />
        </div>
      </div>
      <div className="flex justify-center">
        <Button className="px-5 py-1" outlined darkTheme={false}>
          View More
        </Button>
      </div>
      <article className="lg:px-16">
        <h1 className="uppercase font-chillax font-extrabold text-2xl text-center">
          Our collection
        </h1>
        <p className="text-xs text-center text-b-dark-gray">
          Our latest collection, where classic and contemporary styles converge
          in perfect harmony.
        </p>
        <div className="mt-4 flex justify-center gap-2 flex-wrap-reverse">
          <div className="inline-flex flex-col w-fit">
            <div className="relative rounded-xl overflow-hidden aspect-article w-[300px]">
              <img
                className="w-full"
                src="/assets/tech-mens.png"
                alt="Learn more"
              />
              <div className="absolute top-0 left-0 p-3 h-full w-full bg-b-black/25 flex flex-col justify-end items-center">
                <Button
                  className="w-fit py-2 px-4 uppercase font-bold gap-2"
                  darkTheme={false}
                >
                  Learn more <img src="/assets/icons/arrow.svg" alt="Cart" />
                </Button>
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-xl bg-[url('../public/assets/abraham.png')] min-w-[300px] bg-center bg-cover overflow-hidden relative tel:aspect-article">
            <div className="absolute top-0 left-0 p-3 h-full w-full bg-b-black/25 flex flex-col justify-center items-center">
              <span className="text-3xl font-chillax text-transparent strokeWhite uppercase">
                Classic men
              </span>
              <p className="text-xs text-white text-center">
                We're changing the way things get made
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Home;
