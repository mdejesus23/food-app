import React from "react";
import classes from "./CartItem.module.scss";

const CartItem = (props) => {
  return (
    <li key={props.id} className={classes.cartItem}>
      <img src={props.image} alt="" />
      <div className={classes.flex}>
        <div className={classes.cartDetails}>
          <p className={classes["meal-name"]}>{props.name}</p>
          <div className={classes["cart-amount"]}>
            <p>{`$ ${props.price}`}</p>
            <span>{`x${props.quantity}`}</span>
          </div>
        </div>
        <div className={classes.actions}>
          <button onClick={props.onRemove}>-</button>
          <button onClick={props.onAdd}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
