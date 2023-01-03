import React from "react";
import { LabelCheckboxPropsTypes } from "./labelCheckbox.types";
import "./labelCheckbox.styles.scss";

const LabelCheckbox = (props: LabelCheckboxPropsTypes) => {
  const { label, value, name, onClick } = props;

  return (
    <div className="w-56 py-2 flex relative ">
      <input
        onChange={onClick}
        className="rounded-3xl absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
        checked={value}
        type="checkbox"
        id={`${name}`}
        name={name}
      />
      <label htmlFor={name} className="mx-auto cursor-pointer" style={{ fontSize: "10px" }}>
        <span className="checkbox--label">{label}</span>
      </label>
    </div>
  );
};

export default LabelCheckbox;
