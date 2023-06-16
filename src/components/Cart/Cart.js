import React, { useContext, useState } from "react";
import CartItem from "./CartItem";
import Order from "./Order";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.scss";

const Cart = (props) => {
  const [isOrdering, setIsOrdering] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

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

  const orderHandler = () => {
    setIsOrdering(true);
  };

  const submitOrderHandler = async (customerData) => {
    setIsSubmitting(true);
    await fetch(
      "https://react-food-app-5afee-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: customerData,
          ordereditems: cartCtx.items,
        }),
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
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

  const orderAction = (
    <>
      {hasItem && (
        <button className={classes["order-button"]} onClick={orderHandler}>
          Order
        </button>
      )}
    </>
  );

  const cartContent = (
    <>
      <ul>{cartItems}</ul>
      <h6>{`Total Amount ${totalAmount}`}</h6>
      {isOrdering && (
        <Order onConfirm={submitOrderHandler} onCancel={props.onHideCart} />
      )}
      {!isOrdering && orderAction}
    </>
  );

  const cartSubmittingContent = <p>Sending details...</p>;

  const cartSubmittedContent = <p>Successfully sent the order!</p>;

  return (
    <Modal onHideCart={props.onHideCart}>
      <button className={classes.closeButton} onClick={props.onHideCart}>
        X
      </button>
      <h5>Your Cart</h5>
      {!isSubmitting && !didSubmit && cartContent}
      {!didSubmit && isSubmitting && cartSubmittingContent}
      {!isSubmitting && didSubmit && cartSubmittedContent}
    </Modal>
  );
};

export default Cart;
