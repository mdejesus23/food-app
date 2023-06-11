import { useState } from "react";

import Header from "./components/Layout/Header";
import Hero from "./components/Layout/Hero";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Layout/Footer";

import CartProvider from "./store/CartProvider";

const App = () => {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  // we manage the redering state of the cart here because in this component where we render the Cart component as well.
  return (
    <CartProvider>
      {showCart && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Hero />
      <main>
        <Meals />
      </main>
      <Footer />
    </CartProvider>
  );
};

export default App;
