import React from "react";
import Image from "next/image";

export default function Cart() {
  return (
    <div className="w-19 h-19">
      <div className="block  z-50">
        <div className="w-6 h-6 rounded-full ml-9 bg-green-400 text-center font-bold text-gray-900 object-left-top z-50">
          5
        </div>
      </div>
      <div className="z-10" style={{ marginTop: "-16px" }}>
        <Image
          width={48}
          height={48}
          src="/icons/cart.png"
          alt="Shopping Cart Icon"
        />
      </div>
    </div>
  );
}
