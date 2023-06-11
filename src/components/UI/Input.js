import React from "react";
import classes from "./Input.module.scss";

// use forwardRef is you want to use a ref value to another component instead directly in an input element.
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
