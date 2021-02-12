import Head from "next/head";
import Navbar from "../components/Navbar";
import NavbarS from "../components/NavbarS";
import Cart from "../components/Cart";
import items from "../items.json";
import React, { useState, useEffect, useReducer, useContext } from "react";
import Footer from "../components/Footer";
import { cartBuilder, cartItemIncrementer } from "../tools/cartTools";
import { ConfigContext, CartContext } from "../pages/_app";

export default function Layout({ children }) {
  const [isCartHidden, setisCartHidden] = useState(true);
  const [cart, setcart, cartAdder, cartLength] = useContext(CartContext);

  const [config, setconfig] = useContext(ConfigContext);

  const cartClickHandler = () => {
    setisCartHidden(!isCartHidden);
  };

  return (
    <div className="w-full z-0">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full">
        <Navbar cartBadge={cartLength} cartHandler={cartClickHandler} />
        <NavbarS cartBadge={cart.length} cartHandler={cartClickHandler} />
      </div>

      <div className={isCartHidden ? "hidden" : null}>
        <Cart items={items} />
      </div>

      <main>{children}</main>

      <Footer />
    </div>
  );
}
