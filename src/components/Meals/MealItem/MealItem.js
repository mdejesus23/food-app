import React, { useContext } from "react";
import MealForm from "./MealForm";
import CartContext from "../../../store/cart-context";
import Card from "../../UI/Card";
import classes from "./MealItem.module.scss";

const MealItem = (props) => {
  // we established connection between CartContext and this component and it will rerender whenever the CartContext updated.
  const cartCtx = useContext(CartContext);
  // const price = `$ ${props.price.toFixed(2)}`;

  const addToCartHandler = (quantity) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      image: props.image,
      price: props.price,
      // ill add new amount property in cartItem where i got it form mealForm input value
      quantity: quantity,
    });
  };

  return (
    <Card>
      <li className={classes.mealContainer} key={props.id}>
        <div className={classes.imgContainer}>
          <img src={props.image} alt="food" />
        </div>
        <div className={classes["item-details"]}>
          <h3>{props.name}</h3>
          <p>{`$ ${props.price}`}</p>
          <MealForm id={props.id} onAddToCart={addToCartHandler} />
        </div>
      </li>
    </Card>
  );
};

export default MealItem;
