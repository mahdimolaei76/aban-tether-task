import React from "react";
import { IconButtonPropsTypes } from "./iconButton.types";
const IconButton = (props: IconButtonPropsTypes) => {
  const { text, onClick, style, iconSrc } = props;

  return (
    <div className="w-48 pr-8 flex-center relative" onClick={onClick} style={style}>
      <img className="w-4 h-4 absolute right-4 t-1/2 -translate-y-2/4" src={iconSrc} alt="" />
      <span className="text-gray-300 w-36">{text}</span>
    </div>
  );
};

export default IconButton;
