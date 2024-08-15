import React from "react";

const SuperInput = ({
  htmlFor,
  name,
  type,
  placeholder,
  labelText,
  className,
  value,
  onChange,
  min,
  max,
  disabled,
  onFocus,
  darkTheme = true,
}) => {
  return (
    <div className={className}>
      {labelText && (
        <label
          htmlFor={htmlFor}
          className="block mb-1 text-xs font-medium text-font-light"
        >
          {labelText}
        </label>
      )}
      <div className="relative">
        <input
          type={type}
          name={name}
          id={htmlFor}
          value={value}
          onChange={onChange}
          min={min}
          max={max}
          className={`border ${
            darkTheme
              ? "border-[#1D1D1D] placeholder:text-b-black text-b-black"
              : "border-white placeholder:text-white text-white"
          } bg-transparent rounded-full outline-none block w-full p-2.5`}
          placeholder={placeholder}
          disabled={disabled || false}
          onFocus={onFocus}
        />
      </div>
    </div>
  );
};

export default SuperInput;
