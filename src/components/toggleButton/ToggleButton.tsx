import React from "react";

import "./toggleButton.styles.scss";
import { ToggleButtonPropsTypes } from "./toggleButton.types";

const ToggleButton = (props: ToggleButtonPropsTypes) => {
  const { onClick, options, selectedOptions } = props;
  return (
    <>
      <div
        className={` w-48 mx-auto h-10 bg-gray-100 flex items-center rounded-2xl justify-center`}
      >
        {options.map((option) => {
          return (
            <div
              className={`toggle-button-option w-1/2 h-10 flex items-center rounded-2xl ${
                selectedOptions === option.value
                  ? "bg-green-400 text-white w-3/5"
                  : "text-stone-400"
              }`}
              onClick={onClick}
              key={option.value}
            >
              <p className="text-sm mx-auto font-bold ">{option.label}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ToggleButton;
