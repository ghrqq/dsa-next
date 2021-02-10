import Head from "next/head";
import Navbar from "../components/Navbar";
import NavbarS from "../components/NavbarS";
import CategoryBox from "../components/CategoryBox";
import NewsDisplay from "../components/NewsDisplay";
import Filter from "../components/Filter";
import ItemList from "../components/ItemList";
import ItemBox from "../components/ItemBox";
import FilterLine from "../components/FilterLine";
import Cart from "../components/Cart";
import React, { useState } from "react";

export default function Home() {
  const [isCartHidden, setisCartHidden] = useState(true);

  const cartClickHandler = () => {
    setisCartHidden(!isCartHidden);
  };

  return (
    <div className="w-full">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full">
        <Navbar cartHandler={cartClickHandler} />
        <NavbarS cartHandler={cartClickHandler} />
      </div>
      {/* <div className="w-full h-auto md:h-screen  flex flex-col sm:flex-row justify-evenly items-center">
        <CategoryBox />

        <NewsDisplay />
      </div> */}
      <div className={isCartHidden ? "hidden" : null}>
        <Cart />
      </div>
      <div className="flex flex-col w-full justify-center items-center">
        <div className="sm:sticky top-0 z-30 border-1 border-dotted ">
          <FilterLine />
        </div>
        <div className="w-auto  h-auto  flex flex-col sm:flex-row justify-evenly  items-start">
          <div className="sm:sticky sm:left-4 sm:top-28 mt-0 mx-auto ">
            <div className="flex flex-col  justify-center items-center space-x-4 ">
              <CategoryBox />
            </div>
          </div>
          <div className="flex flex-col justify-evenly mx-auto py-4 items-center space-y-4 ">
            <ItemList />
            <ItemList />
            <ItemList />
            <ItemList />
            <ItemList />
            <ItemList />
            <ItemList />
            <ItemList />
            <ItemList />
            <ItemList />
            <ItemList />
            <ItemList />
            <ItemList />
            <ItemList />
            <ItemList />
          </div>

          {/* <div className="flex flex-row justify-evenly items-center space-y-4 flex-wrap">
            <ItemBox />
            <ItemBox />
            <ItemBox />
            <ItemBox />
            <ItemBox />
            <ItemBox />
            <ItemBox />
            <ItemBox />
            <ItemBox />
          </div> */}
        </div>
      </div>
    </div>
  );
}
