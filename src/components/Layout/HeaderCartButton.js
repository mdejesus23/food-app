import React, { useContext, useState, useEffect } from "react";
import classes from "./HeaderCartButton.module.scss";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  // we established connection between CartContext and this HeaderCartButton and it will rerender whenever the CartContext updated.
  const cartCtx = useContext(CartContext);
  const [bumpButton, setBumptButton] = useState(false);

  const { items } = cartCtx;
  const numberOfCartItems = items.reduce((sum, item) => {
    return sum + item.quantity;
  }, 0);

  useEffect(() => {
    if (items.length === 0) {
      setBumptButton(false);
      return;
    } else {
      setBumptButton(true);
    }

    // use timer to return the state to the default value setBumpButton
    setTimeout(() => {
      setBumptButton(false);
    }, 300);
  }, [items]);

  const buttonClassNames = `${classes.button} ${
    bumpButton ? classes.bump : ""
  }`;

  return (
    <button className={buttonClassNames} onClick={props.onClick}>
      <span>Cart</span>
      <ShoppingCartOutlinedIcon />
      <span>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
