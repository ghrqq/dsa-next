import React, { useState } from "react";
import FilterLine from "./FilterLine";
import ItemList from "./ItemList";
import ItemBox from "./ItemBox";
import items from "../items.json";

export default function ItemDisplayer() {
  const [isList, setisList] = useState(false);

  const setView = () => {
    setisList(!isList);
  };

  return (
    <div>
      <FilterLine viewHandler={setView} />
      {isList ? (
        <div className="flex flex-col justify-evenly mx-auto py-4 items-center space-y-4 ">
          {items.map((item) => (
            <ItemList item={item} />
          ))}
        </div>
      ) : (
        <div className="flex flex-row justify-evenly items-center space-y-4 flex-wrap">
          {items.map((item) => (
            <ItemBox item={item} />
          ))}{" "}
        </div>
      )}
    </div>
  );
}
