import React from "react";
import { IconInputPropsTypes } from "./iconInput.types";
const IconButton = (props: IconInputPropsTypes) => {
  const { label, value, onChange, iconSrc, name, type } = props;

  return (
    <div
      className={`relative py-2 pl-2 w-56 border border-gray-400 pr-10 rounded-3xl ${
        value ? "input-filled" : ""
      }`}
    >
      <img
        src={iconSrc}
        alt=""
        className="w-4 h-4 absolute rounded-0 right-3 top-1/2 -translate-y-1/2"
      />
      <input
        placeholder={label}
        onChange={onChange}
        name={name}
        type={type === "password" ? "password" : "text"}
        value={value}
        className="w-40 rounded border-0 focus:outline-none"
      />
    </div>
  );
};

export default IconButton;
