import React from "react";
import Image from "next/image";

export default function UserMenu() {
  return (
    <div className="flex flex-row justify-evenly items-center ml-4">
      <Image
        src="/icons/user.png"
        width={36}
        height={36}
        alt="Human shaped icon"
      />
      <div className="text-gray-100  ml-4  text-2xl w-40">Sergei</div>
      <div className="text-gray-100  ml-4 text-xl">My Orders</div>
      <div className="text-gray-100 ml-4  text-xl">Profile</div>
      <div className="text-red-400  ml-16 text-xl">Log Out</div>
    </div>
  );
}
