import React from "react";
import Cart from "./Cart";
import CurrencySetter from "./CurrencySetter";
// import LanguageSetter from "./LanguageSetter";
import componentComposer from "../../tools/componentComposer";

export default function ButtonCreator() {
  return (
    <div className="inline-block  text-center">{componentComposer(1)}</div>
  );
}
