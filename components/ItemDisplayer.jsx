import React, { useState, useContext } from "react";
import FilterLine from "./FilterLine";
import ItemList from "./ItemList";
import ItemBox from "./ItemBox";
import items from "../items.json";
import { CartContext, ConfigContext, UserContext } from "../pages/_app";

export default function ItemDisplayer() {
  const [isList, setisList] = useState(false);
  const [cart, setcart, cartAdder] = useContext(CartContext);
  const [lang, setlang, currency, setcurrency, rate] = useContext(
    ConfigContext
  );

  const [user, setuser] = useContext(UserContext);

  const setView = () => {
    setisList(!isList);
  };

  return (
    <div>
      <FilterLine viewHandler={setView} />
      {isList ? (
        <div className="flex flex-col justify-evenly mx-auto py-4 items-center space-y-4 ">
          {items.map((item) => (
            <ItemList
              item={item}
              adder={cartAdder}
              rate={rate}
              currency={currency}
              sale={user.sale}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-row justify-evenly items-center space-y-4 flex-wrap">
          {items.map((item) => (
            <ItemBox
              item={item}
              adder={cartAdder}
              rate={rate}
              currency={currency}
              sale={user.sale}
            />
          ))}{" "}
        </div>
      )}
    </div>
  );
}
