import "../styles/globals.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

// DEV DEP
import userJSON from "../user.json";

export const ConfigContext = React.createContext([]);
export const CartContext = React.createContext([]);
export const UserContext = React.createContext([]);

function MyApp({ Component, pageProps }) {
  const [cart, setcart] = useState([]);
  const [cartLength, setcartLength] = useState(0);
  const [lang, setlang] = useState("en");
  const [currency, setcurrency] = useState("USD");
  const [rate, setrate] = useState(23.8);
  const [user, setuser] = useState({ lang: "en", currency: "UAH", sale: 0.08 });
  const [isLoggedIn, setisLoggedIn] = useState(false);

  // useEffect(() => {
  //   setuser(userJSON[0]);
  //   setlang(userJSON[0].lang);
  //   setcurrency(userJSON[0].currency);
  // }, []);

  useEffect(() => {
    axios({
      method: "post",
      url: "http://localhost:4000/refresh_token",
      withCredentials: true,
    }).then((res) => {
      if (res.status === 200) {
        setisLoggedIn(true);
        setuser(res.data.user);
        return;
      }

      return;
    });
  }, []);

  const [config, setconfig] = useState({
    lang: user.lang ? user.lang : "en",
    currency: user.currency ? user.currency : "UAH",
    currencyRate: 23.8,
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
      <UserContext.Provider value={[user, setuser, isLoggedIn, setisLoggedIn]}>
        <CartContext.Provider
          value={[cart, setcart, cartAdder, cartLength, setcartLength]}
        >
          <Component {...pageProps} />
        </CartContext.Provider>
      </UserContext.Provider>
    </ConfigContext.Provider>
  );
}

export default MyApp;
