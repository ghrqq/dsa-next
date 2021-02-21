import React, { useState } from "react";
import CategoryEditor from "./CategoryEditor";
import CompatibleEditor from "./CompatibleEditor";

export default function ProductListItem({ item, checkHandler, checked }) {
  const [isExpand, setisExpand] = useState(false);
  const [product, setproduct] = useState(item);
  const [count, setcount] = useState(1);
  const [isEdit, setisEdit] = useState(false);

  const {
    code,
    brand,
    price,
    origin,
    description,
    category,
    subcategory,
    compatible,
  } = product;

  const handleSubSave = (nam, val) => {
    let temp = product;
    temp[nam] = val;
    setcount(count + 1);
    setproduct(temp);
  };

  return (
    <div className="w-full ">
      <div className="px-4 w-full bg-gray-300 flex flex-row justify-evenly items-center">
        <input
          className="w-1/6"
          placeholder={code}
          disabled={!isEdit}
          onChange={(e) => handleSubSave("code", e.target.value)}
        />
        <input
          className="w-1/6"
          placeholder={brand}
          disabled={!isEdit}
          onChange={(e) => handleSubSave("brand", e.target.value)}
        />
        {/* <input className="w-1/6" placeholder={category} disabled={!isEdit} /> */}
        <CategoryEditor
          category={category}
          subcategory={subcategory}
          isEdit={isEdit}
          handleSave={handleSubSave}
        />

        <input
          className="w-1/6"
          placeholder={origin}
          disabled={!isEdit}
          onChange={(e) => handleSubSave("origin", e.target.value)}
        />
        <input
          className="w-1/6"
          placeholder={price}
          disabled={!isEdit}
          onChange={(e) => handleSubSave("price", e.target.value)}
        />

        <div className="w-1/6 text-right">
          <button
            className="inline-block w-1/3"
            onClick={() => setisExpand(!isExpand)}
          >
            {isExpand ? "-" : "+"}
          </button>
          <input
            className="w-1/3 "
            type="checkbox"
            checked={checked}
            onChange={() => checkHandler(code)}
          />
        </div>
      </div>

      <div className={isExpand ? null : "hidden"}>
        <div className="bg-red-300">
          <textarea
            className="w-1/6 my-4 mx-4"
            placeholder={description}
            disabled={!isEdit}
            onChange={(e) => handleSubSave("description", e.target.value)}
          />

          <CompatibleEditor
            modals={compatible}
            isEdit={isEdit}
            handleSave={handleSubSave}
          />
        </div>
        <div>
          <button
            className="bg-yellow-400 text-gray-50 rounded-xl px-4 py-2"
            onClick={() => setisEdit(!isEdit)}
          >
            EDIT
          </button>
          <button
            className="bg-green-400 text-gray-50 rounded-xl px-4 py-2"
            onClick={() => setisEdit(!isEdit)}
          >
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
}
