import Head from "next/head";
import Navbar from "../components/Navbar";
import NavbarS from "../components/NavbarS";
import Cart from "../components/Cart";
import items from "../items.json";
import React, { useState, useEffect, useReducer, useContext } from "react";
import Footer from "../components/Footer";
import { cartBuilder, cartItemIncrementer } from "../tools/cartTools";
import { ConfigContext, CartContext, UserContext } from "../pages/_app";
import Register from "../components/Register";

export default function Layout({ children }) {
  const [isCartHidden, setisCartHidden] = useState(true);
  const [isRegisterHidden, setisRegisterHidden] = useState(true);
  const [cart, setcart, cartAdder, cartLength] = useContext(CartContext);

  const [config, setconfig] = useContext(ConfigContext);

  const [user, setuser, isLoggedIn, setisLoggedIn] = useContext(UserContext);

  const cartClickHandler = () => {
    setisCartHidden(!isCartHidden);
  };

  const regClickHandler = () => {
    setisRegisterHidden(!isRegisterHidden);
  };

  return (
    <div className="w-full z-0">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full">
        <Navbar
          cartBadge={cartLength}
          cartHandler={cartClickHandler}
          online={isLoggedIn}
          regHandler={regClickHandler}
        />
        <NavbarS
          cartBadge={cart.length}
          cartHandler={cartClickHandler}
          online={isLoggedIn}
          regHandler={regClickHandler}
        />
      </div>
      <div className={isRegisterHidden ? "hidden" : null}>
        <Register />
      </div>

      <div className={isCartHidden ? "hidden" : null}>
        <Cart items={items} />
      </div>

      <main>{children}</main>

      <Footer />
    </div>
  );
}
