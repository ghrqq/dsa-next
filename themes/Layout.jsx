import Head from "next/head";
import Navbar from "../components/Navbar";
import NavbarS from "../components/NavbarS";
import Cart from "../components/Cart";
import items from "../items.json";
import React, { useState, useEffect, useReducer } from "react";
import Footer from "../components/Footer";
import { cartBuilder, cartItemIncrementer } from "../tools/cartTools";

export const ConfigContext = React.createContext([]);
export const CartContext = React.createContext([]);

export default function Layout({ children }) {
  const [isCartHidden, setisCartHidden] = useState(true);
  const [cart, setcart] = useState([]);

  const [config, setconfig] = useState({
    lang: "en",
    currency: "usd",
    user: true,
  });

  const cartClickHandler = () => {
    setisCartHidden(!isCartHidden);
  };

  useEffect(() => {
    const buildedCart = cartBuilder(items);
    setcart(buildedCart);
  }, [items]);

  return (
    <ConfigContext.Provider value={[config, setconfig]}>
      <CartContext.Provider value={[cart, setcart]}>
        <div className="w-full z-0">
          <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className="w-full">
            <Navbar cartBadge={items.length} cartHandler={cartClickHandler} />
            <NavbarS cartBadge={items.length} cartHandler={cartClickHandler} />
          </div>

          <div className={isCartHidden ? "hidden" : null}>
            <Cart items={items} />
          </div>

          <main>{children}</main>

          <Footer />
        </div>
      </CartContext.Provider>
    </ConfigContext.Provider>
  );
}
