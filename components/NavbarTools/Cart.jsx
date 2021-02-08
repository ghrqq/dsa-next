import React from "react";
import Image from "next/image";

export default function Cart() {
  return (
    <div>
      <div className="w-16 h-16">
        <div className="block">
          <div className="w-6 h-6 rounded-full ml-9 bg-green-400 text-center font-bold text-gray-900 object-left-top z-50">
            5
          </div>
        </div>
        <div style={{ marginTop: "-16px" }}>
          <Image
            width={48}
            height={48}
            src="/icons/cart.png"
            alt="Shopping Cart Icon"
          />
        </div>
      </div>
    </div>
  );
}
