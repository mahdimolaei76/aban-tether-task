import React from "react";
import { LabelCheckboxPropsTypes } from "./labelCheckbox.types";

const LabelCheckbox = (props: LabelCheckboxPropsTypes) => {
  const { label, value, name, onClick } = props;

  return (
    <div>
      <input
        onChange={onClick}
        className=""
        checked={value}
        type="checkbox"
        id={`id-for-${name}`}
        name={name}
      />
      <label htmlFor={name}>
        <span>
          <svg width="12px" height="10px" viewBox="0 0 12 10">
            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
          </svg>
        </span>
        <span className="checkbox-label">{label}</span>
      </label>
    </div>
  );
};

export default LabelCheckbox;
