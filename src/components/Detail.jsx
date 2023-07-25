import React from "react";

const Detail = (props) => {
  return (
    <div className="selected-feature">
      <li
        className="plan-activated__feature"
        style={{
          color: props.active ? "#0c2461" : "gray",
          display: props.disabled ? "none" : "flex",
        }}
      >
        {props.title}
      </li>
      <img
        src={
          props.active
            ? "/icons/selected-icon.svg"
            : "/icons/unselected-icon.svg"
        }
      />
    </div>
  );
};

export default Detail;
