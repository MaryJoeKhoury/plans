import React from "react";

const Button = (props) => {
  return (
    <div className="button-cta">
      <button type="button" className="plan-button">
        {props.text}
      </button>
    </div>
  );
};

export default Button;
