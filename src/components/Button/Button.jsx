import React from "react";
import "./Button.scss";

const Button = ({ onClick, isActive, children }) => {
  return (
    <button
      className={`button ${isActive ? "button--active" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
