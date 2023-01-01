import React, { useEffect, useState } from "react";
import { IconInputPropsTypes } from "./iconInput.types";
const IconButton = (props: IconInputPropsTypes) => {
  const {
    label,
    value,
    onChange,
    iconSrc,
    name,
    type
  } = props;

  return (
    <div className="flex-center" >
        <img src={iconSrc} />
        <input
            placeholder={label}
            onChange={onChange}
            className={""}
            name={name}
            type={type === "password" ? "password" : "text"}
            value={value}
        />
    </div>
  );
};


export default IconButton;
