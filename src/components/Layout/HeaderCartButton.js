import React from "react";
import classes from "./HeaderCartButton.module.scss";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button}>
      <span>Cart</span>
      <ShoppingCartOutlinedIcon />
      <span>0</span>
    </button>
  );
};

export default HeaderCartButton;
