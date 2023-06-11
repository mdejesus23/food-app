import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    // get the sum of totalAmount of all the items that are added to the cart state
    // by multiplying the item price and item amount/quantity.
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.quantity;

    // get the index of items that already existing in the items array
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    // find the items that already exist
    const existingCartItems = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItems) {
      // assign the existingCartItems with the updated amount property to updatedItem variable.
      const updatedItem = {
        ...existingCartItems,
        quantity: existingCartItems.quantity + action.item.quantity,
      };
      // assign updatedItems with the existing items on the old array so i can reassign to the new updated array state.items.
      // creating a new array where i copy the old array objects so i couldn't edit the original array.
      updatedItems = [...state.items];
      // i pick the old item array and updated with this updatedItem.
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItems = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingCartItems.price;

    let updatedItems;
    if (existingCartItems.quantity === 1) {
      updatedItems = state.items.filter((item) => action.id !== item.id);
    } else {
      const updatedItem = {
        ...existingCartItems,
        quantity: existingCartItems.quantity - 1,
      };
      // make a copy of the original items array to not directly modify the old one.
      updatedItems = [...state.items];
      // update the existing item
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "CLEAR") {
    return defaultCartState;
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeCartItemHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const clearCartHandler = () => {
    dispatchCartAction({ type: "CLEAR" });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addToCartHandler,
    removeItem: removeCartItemHandler,
    clearCart: clearCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
