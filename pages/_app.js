import "../styles/globals.css";
import React, { useState } from "react";

export const ConfigContext = React.createContext([]);
export const CartContext = React.createContext([]);

function MyApp({ Component, pageProps }) {
  const [cart, setcart] = useState([]);
  const [cartLength, setcartLength] = useState(0);
  const [lang, setlang] = useState("en");
  const [currency, setcurrency] = useState("USD");
  const [rate, setrate] = useState(23.8);

  const [config, setconfig] = useState({
    lang: "en",
    currency: "USD",
    currencyRate: 23.8,
    user: true,
  });

  const configure = (con, val) => {
    let temp = config;
    temp[con] = val;
    setconfig(temp);
  };

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
    <ConfigContext.Provider
      value={[lang, setlang, currency, setcurrency, rate]}
    >
      <CartContext.Provider
        value={[cart, setcart, cartAdder, cartLength, setcartLength]}
      >
        <Component {...pageProps} />
      </CartContext.Provider>
    </ConfigContext.Provider>
  );
}

export default MyApp;
