import React, { useState, useRef } from "react";
import classes from "./Order.module.scss";

// use helper function
const isEmpty = (value) => value.trim() === "";
// const isFiveChars = (value) => value.trim().length >= 5;

const Order = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    address: true,
    city: true,
  });

  const nameInputRef = useRef();
  const addressInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const inputName = nameInputRef.current.value;
    const inputAddress = addressInputRef.current.value;
    const inputCity = cityInputRef.current.value;

    const inputNameIsValid = !isEmpty(inputName);
    const inputAddressIsValid = !isEmpty(inputAddress);
    const inputCityIsValid = !isEmpty(inputCity);

    setFormInputsValidity({
      name: inputNameIsValid,
      address: inputAddressIsValid,
      city: inputCityIsValid,
    });

    const formIsValid =
      inputNameIsValid && inputAddressIsValid && inputCityIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: inputName,
      address: inputAddress,
      city: inputCity,
    });
  };

  const nameInputClassname = formInputsValidity.name ? "" : classes.invalid;
  const addressInputClassname = formInputsValidity.address
    ? ""
    : classes.invalid;
  const cityInputClassname = formInputsValidity.city ? "" : classes.invalid;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={`${classes.input} ${nameInputClassname}`}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && <p>Invalid name input!</p>}
      </div>
      <div className={`${classes.input} ${addressInputClassname}`}>
        <label htmlFor="address">Address</label>
        <input type="text" id="address" ref={addressInputRef} />
        {!formInputsValidity.address && <p>Invalid address input!</p>}
      </div>
      <div className={`${classes.input} ${cityInputClassname}`}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputsValidity.city && <p>Invalid city input!</p>}
      </div>
      <div className={classes.control}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button>Confirm</button>
      </div>
    </form>
  );
};
export default Order;
