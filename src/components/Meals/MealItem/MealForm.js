import React, { useRef, useState } from "react";
import classes from "./MealForm.module.scss";
import Input from "../../UI/Input";

const MealForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    // this value property is always a string even the input type is set to 'number'
    const enteredAmount = amountInputRef.current.value;
    // so i have to convert a string data types to a number type.
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form id={props.id} className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: `ampount_${props.id}`,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add</button>
      {!amountIsValid && (
        <p className={classes["error-text"]}>
          Please enter a valid amount (1-5).
        </p>
      )}
    </form>
  );
};

export default MealForm;
