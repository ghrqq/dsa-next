import React from "react";
import LanguageSetter from "./NavbarTools/LanguageSetter";
import CurrencySetter from "./NavbarTools/CurrencySetter";
import Login from "./NavbarTools/Login";
import Register from "./NavbarTools/Register";
import UserMenu from "./NavbarTools/UserMenu";
import Agent from "./NavbarTools/Agent";
import Cart from "./NavbarTools/Cart";

export default function Navbar() {
  return (
    <div className="hidden sm:block">
      <div className="bg-gray-900  w-screen h-24 flex flex-row justify-between items-center">
        <div className="flex flex-row justify-start items-center">
          <div className="logo text-4xl text-center justify-self-start inline-block text-gray-100 p-2">
            DSA <br /> AUTO
          </div>
          <div className="text-4xl pl-4 text-center flex flex-row items-center justify-center text-gray-100 ">
            <div className="inline-block pl-4 align-middle">Home</div>
            <div className="inline-block pl-4 align-middle">Search</div>
            <div className="inline-block pl-4 align-middle">News</div>
          </div>
        </div>
        <div className="mr-4 text-gray-100 flex flex-row justify-center items-center">
          <CurrencySetter />
          <LanguageSetter />
        </div>
      </div>
      <div className="bg-gray-600  w-screen h-16">
        <div className=" h-full flex flex-row justify-between items-center">
          {/* <Login /> */}
          <UserMenu />
          {/* <Register /> */}
          <div className="flex flex-row justify-end items-center mr-2">
            <Agent />
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
}
