import React, { useContext } from "react";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.scss";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$ ${cartCtx.totalAmount.toFixed(2)}`;

  const hasItem = cartCtx.items.length !== 0;
  const cartData = [...cartCtx.items];

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, quantity: 1 });
  };

  const cartItems = (
    <ul>
      {cartData.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          image={item.image}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      <button className={classes.closeButton} onClick={props.onHideCart}>
        X
      </button>
      <h1>Your Cart</h1>
      <ul>{cartItems}</ul>
      <h2>{`Total Amount ${totalAmount}`}</h2>
      {hasItem && <button className={classes["order-button"]}>Order</button>}
    </Modal>
  );
};

export default Cart;
