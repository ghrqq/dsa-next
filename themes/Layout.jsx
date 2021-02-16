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
import ButtonCreator from "../components/NavbarTools/ButtonCreator";

export default function Layout({ children }) {
  const [isCartHidden, setisCartHidden] = useState(true);
  const [isRegisterHidden, setisRegisterHidden] = useState(true);
  const [isUserMenuHidden, setisUserMenuHidden] = useState(true);
  const [cart, setcart, cartAdder, cartLength] = useContext(CartContext);

  const [config, setconfig] = useContext(ConfigContext);

  const [user, setuser, isLoggedIn, setisLoggedIn] = useContext(UserContext);

  const cartClickHandler = () => {
    setisCartHidden(!isCartHidden);
  };

  const regClickHandler = () => {
    setisRegisterHidden(!isRegisterHidden);
  };

  const userMenuClickHandler = () => {
    setisUserMenuHidden(!isUserMenuHidden);
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
          userMenuHandler={userMenuClickHandler}
        />
        <NavbarS
          cartBadge={cart.length}
          cartHandler={cartClickHandler}
          online={isLoggedIn}
          regHandler={regClickHandler}
          userMenuHandler={userMenuClickHandler}
        />
      </div>
      <div className={isUserMenuHidden ? "hidden" : null}>
        <div className="w-auto h-auto text-left px-4 py-2 flex flex-row flex-wrap justify-between items-center bg-yellow-400 ">
          <ButtonCreator />
          <div
            className="text-red-400   text-xl border-l-2 inline-block ml-8 border-dashed px-4 border-gray-900"
            onClick={() => setisLoggedIn(!isLoggedIn)}
          >
            Log Out
          </div>
        </div>
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
