import React from "react";

const Button = ({
  type = "button",
  disabled,
  children,
  className,
  onClick,
  outlined = false,
  darkTheme = true,
  transparent = false,
}) => {
  return (
    <button
      className={`${className} rounded-full flex items-center justify-center ${
        darkTheme
          ? `${!transparent && "bg-b-black"} text-white`
          : `${!transparent && "bg-white"} text-b-black`
      } ${
        outlined &&
        `border-2 ${darkTheme ? "border-white" : "border-[#1D1D1D]"}`
      }`}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
