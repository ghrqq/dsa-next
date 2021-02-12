import "../styles/globals.css";
import React, { useState } from "react";

export const ConfigContext = React.createContext([]);
export const CartContext = React.createContext([]);

function MyApp({ Component, pageProps }) {
  const [cart, setcart] = useState([]);
  const [cartLength, setcartLength] = useState(0);

  const [config, setconfig] = useState({
    lang: "en",
    currency: "usd",
    user: true,
  });

  const cartAdder = (product) => {
    let tempArr = cart;
    // Check if item is already in cart
    let check = cart.filter((item) => item.code === product.code);

    if (check.length > 0) {
      window.alert("Item is already added to the cart.");
      return;
    }

    tempArr.push(product);

    setcart(tempArr);
    setcartLength(tempArr.length);
  };

  return (
    <ConfigContext.Provider value={[config, setconfig]}>
      <CartContext.Provider
        value={[cart, setcart, cartAdder, cartLength, setcartLength]}
      >
        <Component {...pageProps} />
      </CartContext.Provider>
    </ConfigContext.Provider>
  );
}

export default MyApp;
