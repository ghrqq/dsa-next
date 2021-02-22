import React from "react";
import LanguageSetter from "./NavbarTools/LanguageSetter";
import CurrencySetter from "./NavbarTools/CurrencySetter";
import Login from "./NavbarTools/Login";
import Register from "./NavbarTools/Register";
import UserMenu from "./NavbarTools/UserMenu";
import Agent from "./NavbarTools/Agent";
import Cart from "./NavbarTools/Cart";
import Link from "next/link";

export default function Navbar({
  cartHandler,
  cartBadge,
  online,
  regHandler,
  userMenuHandler,
}) {
  return (
    <div className="hidden sm:block">
      <div className="bg-gray-900  w-full h-24 flex flex-row justify-between items-center">
        <div className="flex flex-row justify-start items-center">
          <div className="logo text-4xl text-center justify-self-start inline-block text-gray-100 p-2">
            DSA <br /> AUTO
          </div>
          <div className="text-4xl pl-4 text-center flex flex-row items-center justify-center text-gray-100 ">
            <div className="inline-block  pl-4 align-middle">
              <Link href="/">Home</Link>
            </div>
            <div className="inline-block pl-4 align-middle">
              <Link href="/search">Search</Link>
            </div>
            <div className="inline-block pl-4 align-middle">News</div>
          </div>
        </div>
        <div className="mr-4 text-gray-100 flex flex-row justify-center items-center">
          <CurrencySetter />
          <LanguageSetter />
        </div>
      </div>
      <div className="bg-gray-600  w-full h-auto ">
        <div className=" h-full flex flex-row justify-between items-center">
          {online ? (
            <div onClick={userMenuHandler}>
              <UserMenu />
            </div>
          ) : (
            <div className="flex flex-row justify-between items-center flex-wrap ">
              <Login />
              <div className="cursor-pointer inline-block" onClick={regHandler}>
                <Register />
              </div>
            </div>
          )}
          {/* <Login /> */}
          {/* <UserMenu /> */}
          {/* <Register /> */}
          <div className="flex flex-row justify-end items-center mr-2">
            <Agent />
            <div className="cursor-pointer mr-4" onClick={cartHandler}>
              <Cart badge={cartBadge} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
