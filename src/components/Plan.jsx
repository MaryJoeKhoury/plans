import React, { useState } from "react";

const Plan = (props) => {
  return (
    <div>
      <label htmlFor={`radio-${props.id}`}>
        <div
          className="plan"
          style={{
            backgroundColor: props.isChecked ? "#16a085" : "white",
          }}
        >
          <div className="planLeft">
            <input
              type="radio"
              value={props.type}
              className="radio-custom"
              name="plan"
              id={`radio-${props.id}`}
              disabled={props.disabled}
              onChange={props.onSelect}
            />
            <div
              className="checker"
              style={{
                backgroundImage: props.isChecked
                  ? "url('/icons/checked-icon.svg')"
                  : "",
                border: props.isChecked ? "none" : "3px solid #a7a7a7",
              }}
            />
            <h1
              className="plan-activated__type"
              style={{
                color: props.isChecked ? "white" : "#0c2461",
              }}
            >
              {props.title}
            </h1>
          </div>
          <div className="planRight">
            <h3
              className="plan-activated__savings"
              style={{
                color: props.isChecked ? "white" : "#eb2f06",
                backgroundColor: props.isChecked ? "#1CBC9D" : "#ffcfc5",
              }}
            >{`Save ${props.discount}%`}</h3>
            <h1
              className="plan-activated__price"
              style={{
                color: props.isChecked ? "white" : "#0c2461",
              }}
            >{`$${props.price}`}</h1>
            <span
              className="plan-activated__duration"
              style={{
                color: props.isChecked ? "white" : "#0c2461",
              }}
            >
              /Month
            </span>
          </div>
        </div>
      </label>
    </div>
  );
};

export default Plan;
