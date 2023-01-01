import React, { useEffect, useState } from "react";
import { IconButtonPropsTypes } from "./iconButton.types";
const IconButton = (props: IconButtonPropsTypes) => {
  const {
    text,
    onClick,
    style,
    iconSrc,
  } = props;

  return (
    <div className="flex-center" onClick={onClick} style={style}>
      <img className="w-1 h-1" src={iconSrc}/>
      <span>{text}</span>
    </div>
  );
};


export default IconButton;
