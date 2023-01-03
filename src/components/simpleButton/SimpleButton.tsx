import React from "react";
import { SimpleButtonPropsTypes } from "./simpleButton.types";
import "./simpleButton.styles.scss";
const SimpleButton = (props: SimpleButtonPropsTypes) => {
  const { text, onClick, style = {}, disabled } = props;
  return (
    <div
      style={style}
      className={`simple-button-container w-24 mx-auto flex-center text-center text-white cursor-pointer rounded-3xl ${
        disabled ? "simple-button-container__diasbled" : ""
      }`}
      onClick={disabled ? () => {} : onClick}
    >
      {text}
    </div>
  );
};

export default SimpleButton;
