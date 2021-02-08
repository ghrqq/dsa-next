import React from "react";
import CartItem from "./CartItem";

export default function CartContainer() {
  return (
    <div className="w-full md:w-9/12 h-auto min-h-screen opacity-100 z-50 bg-opacity-100 bg-gray-600 absolute right-0 top-auto flex flex-col justify-around items-end">
      <div className="w-9/12 mr-4  p-8 bg-gray-50">
        <CartItem count={true} />
        <CartItem count={true} />
        <CartItem count={true} />
        <CartItem count={true} />
        <CartItem count={true} />
        <CartItem count={true} />
      </div>
    </div>
  );
}
