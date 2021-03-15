import Head from "next/head";
import Navbar from "../components/Navbar";
import NavbarS from "../components/NavbarS";
import Cart from "../components/Cart";
import items from "../items.json";
import { useRouter } from "next/router";
import React, { useState, useEffect, useReducer, useContext } from "react";
import Footer from "../components/Footer";
import { cartBuilder, cartItemIncrementer } from "../tools/cartTools";
import { ConfigContext, CartContext, UserContext } from "../pages/_app";
import Register from "../components/Register";
import ButtonCreator from "../components/NavbarTools/ButtonCreator";
import axios from "axios";

export default function Layout({ children }) {
  const [isCartHidden, setisCartHidden] = useState(true);
  const [isRegisterHidden, setisRegisterHidden] = useState(true);
  const [isUserMenuHidden, setisUserMenuHidden] = useState(true);
  const [cart, setcart, cartAdder, cartLength] = useContext(CartContext);

  const [config, setconfig] = useContext(ConfigContext);

  const [user, setuser, isLoggedIn, setisLoggedIn] = useContext(UserContext);
  const router = useRouter();

  const cartClickHandler = () => {
    setisCartHidden(!isCartHidden);
  };

  const regClickHandler = () => {
    setisRegisterHidden(!isRegisterHidden);
  };

  const userMenuClickHandler = () => {
    setisUserMenuHidden(!isUserMenuHidden);
  };

  const handleLogOut = () => {
    axios({
      method: "post",
      url: "http://localhost:4000/logout",
      withCredentials: true,
    });
    setuser({ lang: "en", currency: "UAH", sale: 0.08 });
    setisLoggedIn(false);
    setisUserMenuHidden(true);
    router.push("/");
  };

  return (
    <div className="w-full z-0 ">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full no-print">
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
      <div className={isUserMenuHidden ? "hidden" : "no-print"}>
        <div className="w-auto h-auto text-left px-4 py-2 flex flex-row flex-wrap justify-between items-center bg-yellow-400 ">
          <ButtonCreator />
          <div
            className="text-red-400 cursor-pointer hover:text-blue-400  text-xl border-l-2 inline-block ml-8 border-dashed px-4 border-gray-900"
            onClick={() => handleLogOut()}
          >
            Log Out
          </div>
        </div>
      </div>
      <div className={isRegisterHidden ? "hidden" : "no-print"}>
        <Register regHandler={regClickHandler} />
      </div>

      <div className={isCartHidden ? "hidden" : "no-print"}>
        <Cart items={items} />
      </div>

      <main key={children}>{children}</main>

      <Footer />
    </div>
  );
}
