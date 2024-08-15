import React, { useState } from "react";
import Article from "@components/Article";
import Button from "@components/Button";
import ColorSelector from "@components/ColorSelector";

const ProductDetail = () => {
  const [selectedColor, setSelectedColor] = useState("green");
  const [imgSrc, setImgSrc] = useState("/assets/product-det.png");
  const [selectedSize, setSelectedSize] = useState("XS");

  const handleColorSelect = (color, imgSrc) => {
    setSelectedColor(color);
    setImgSrc(imgSrc);
  };
  return (
    <div className="space-y-8 w-full flex-grow-0 flex-shrink-0">
      <section className="flex flex-wrap justify-center gap-4">
        <div className="aspect-square flex-shrink h-fit md:w-1/2 md:max-w-[330px] max-w-full rounded-xl overflow-hidden">
          <img src={imgSrc} alt="Badacore Tshirt" />
        </div>
        <div className="md:basis-1/2 w-full space-y-1">
          <h1 className="text-xl font-bold font-chillax">Badacore Tshirt</h1>
          <div className="font-semibold">CAD $80</div>
          <div className="font-medium">
            Color: {selectedColor[0].toUpperCase() + selectedColor.slice(1)}
          </div>
          <div className="flex items-center gap-1">
            <ColorSelector
              selected={selectedColor === "green"}
              color="green"
              onSelect={() => {
                handleColorSelect("green", "/assets/product-det.png");
              }}
            />
            <ColorSelector
              selected={selectedColor === "purple"}
              color="purple"
              onSelect={() => {
                handleColorSelect("purple", "/assets/product-det.png");
              }}
            />
            <ColorSelector
              onSelect={() => {
                handleColorSelect("ocean", "/assets/product-det-ocean.png");
              }}
              selected={selectedColor === "ocean"}
              color="ocean"
            />
            <ColorSelector
              onSelect={() => {
                handleColorSelect("olive", "/assets/product-det-olive.png");
              }}
              selected={selectedColor === "olive"}
              color="olive"
            />
          </div>
          <div className="font-medium">Size:</div>
          <div className="flex gap-2 text-sm">
            <Button
              onClick={() => {
                setSelectedSize("XS");
              }}
              darkTheme={selectedSize === "XS"}
              outlined={selectedSize !== "XS"}
              className="px-4 py-1"
            >
              XS
            </Button>
            <Button
              onClick={() => {
                setSelectedSize("S");
              }}
              darkTheme={selectedSize === "S"}
              outlined={selectedSize !== "S"}
              className="px-4 py-1"
            >
              S
            </Button>
            <Button
              onClick={() => {
                setSelectedSize("M");
              }}
              darkTheme={selectedSize === "M"}
              outlined={selectedSize !== "M"}
              className="px-4 py-1"
            >
              M
            </Button>
            <Button
              onClick={() => {
                setSelectedSize("L");
              }}
              darkTheme={selectedSize === "L"}
              outlined={selectedSize !== "L"}
              className="px-4 py-1"
            >
              L
            </Button>
            <Button
              onClick={() => {
                setSelectedSize("XL");
              }}
              darkTheme={selectedSize === "XL"}
              outlined={selectedSize !== "XL"}
              className="px-3 py-1"
            >
              XL
            </Button>
          </div>
          <div className="text-xs w-full pt-2 flex gap-2">
            <Button className="px-4 py-3 basis-1/2 uppercase">Buy now</Button>
            <Button
              darkTheme={false}
              outlined
              className="px-4 py-3 basis-1/2 uppercase font-medium"
            >
              Add to cart
            </Button>
          </div>
          <div className="font-chillax font-semibold">Description</div>
          <p className="text-xs text-b-dark-gray">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus similique expedita, quasi eveniet quibusdam voluptate
            provident sequi culpa hic magnam soluta maxime ex. Nam enim nihil
            assumenda cumque iusto placeat!
          </p>
        </div>
      </section>
      <section className="space-y-4">
        <p className="font-chillax font-bold">You may also like</p>
        <div className="flex gap-2 overflow-x-scroll remove-scrollbar">
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
