import React, { useContext } from "react";
import Image from "next/image";

import { UserContext } from "../../pages/_app";

export default function UserMenu() {
  const [user, setuser, isLoggedIn, setisLoggedIn] = useContext(UserContext);

  return (
    <div className="flex flex-row flex-wrap sm:flex-nowrap justify-evenly items-center ml-4 cursor-pointer">
      <Image
        src="/icons/user.png"
        width={36}
        height={36}
        alt="Human shaped icon"
      />
      <div className="text-gray-100 hover:text-green-400  ml-4  text-2xl w-40">
        {user.name}
      </div>
      <div className="text-gray-100 hover:text-green-400  ml-4 text-xl">
        My Orders
      </div>
      <div className="text-gray-100 hover:text-green-400 ml-4  text-xl">
        Profile
      </div>
      <div
        className="text-red-400  ml-16 text-xl"
        onClick={() => setisLoggedIn(!isLoggedIn)}
      >
        Log Out
      </div>
    </div>
  );
}
