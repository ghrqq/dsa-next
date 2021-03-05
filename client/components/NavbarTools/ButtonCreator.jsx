import React, { useContext } from "react";
import Cart from "./Cart";
import CurrencySetter from "./CurrencySetter";
// import LanguageSetter from "./LanguageSetter";
import componentComposer from "../../tools/componentComposer";
import { UserContext } from "../../pages/_app";

export default function ButtonCreator() {
  const [user, setuser, isLoggedIn, setisLoggedIn] = useContext(UserContext);
  return (
    // TODO: Hash for user roles will be added
    <div className="inline-block  text-center">
      {componentComposer(user.role ? user.role : 0)}
    </div>
  );
}
