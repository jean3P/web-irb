import React from "react";
import './Button.css'
import {Link} from "react-router-dom";

const STYLES = {
  elements: ['btn--primary', 'btn--outline', 'btn--test']
};
const SIZES = {
  elements: ['btn--medium', 'btn--large']
};

export const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {
  const checkButtonStyle = STYLES.elements.includes(buttonStyle) ? buttonStyle :  STYLES[0];
  const checkButtonSize = SIZES.elements.includes(buttonSize) ? buttonSize: SIZES[0];

  return (
    <Link to={"/contactUs"} className={"btn-mobile"}>
      <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
        {children}
      </button>
    </Link>
  );
};