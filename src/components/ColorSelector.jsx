import React from "react";

const ColorSelector = ({ onSelect, color, selected = false }) => {
  return (
    <span
      onClick={onSelect}
      className={`inline-block cursor-pointer ${
        selected ? "h-3.5 w-3.5" : "h-4 w-4"
      } rounded-full bg-b-${color}`}
    ></span>
  );
};

export default ColorSelector;
