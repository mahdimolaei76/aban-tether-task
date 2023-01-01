import React from "react";
import { IconInputPropsTypes } from "./iconInput.types";
const IconButton = (props: IconInputPropsTypes) => {
  const { label, value, onChange, iconSrc, name, type } = props;

  return (
    <div className="relative pr-8">
      <img src={iconSrc} alt="" className="w-4 h-4 absolute right-4 t-1/2 -translate-y-2/4" />
      <input
        placeholder={label}
        onChange={onChange}
        name={name}
        type={type === "password" ? "password" : "text"}
        value={value}
      />
    </div>
  );
};

export default IconButton;
