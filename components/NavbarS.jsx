import React, { useState } from "react";
import Agent from "./NavbarTools/Agent";
import LanguageSetter from "./NavbarTools/LanguageSetter";
import CurrencySetter from "./NavbarTools/CurrencySetter";
import Login from "./NavbarTools/Login";
import Register from "./NavbarTools/Register";
import UserMenu from "./NavbarTools/UserMenu";
import Cart from "./NavbarTools/Cart";

export default function NavbarS({ cartHandler }) {
  const [isHidden, setisHidden] = useState(true);

  return (
    <div className=" sm:hidden">
      <div className="w-full p-4 bg-gray-600 flex flex-row justify-between items-center">
        <div
          className="w-16 inline-block border h-16 rounded-full p-6 bg-gray-900"
          onClick={() => setisHidden(!isHidden)}
        >
          M
        </div>
        <LanguageSetter />
        <div className="cursor-pointer" onClick={cartHandler}>
          <Cart />
        </div>
      </div>
      <div className={isHidden ? "hidden" : null}>
        <div className="h-screen flex flex-col bg-yellow-300 text-gray-900 space-y-6">
          <div className="text-gray-900 text-xl">
            <div className="mx-auto text-center p-4 align-middle">Home</div>
            <div className="mx-auto text-center p-4 align-middle">Search</div>
            <div className="mx-auto text-center p-4 align-middle">News</div>
          </div>
          <Agent />

          <Login />
          <Register />
          <CurrencySetter />
          {/* <UserMenu /> */}
        </div>
      </div>
    </div>
  );
}
