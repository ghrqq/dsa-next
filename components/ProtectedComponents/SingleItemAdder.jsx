import React, { useState } from "react";
import CategoryEditor from "./CategoryEditor";
import CompatibleEditor from "./CompatibleEditor";

function SingleItemAdder({ index, changeHandler }) {
  const [product, setproduct] = useState({});
  return (
    <div>
      <input
        placeholder="code"
        name="code"
        onChange={(e) => changeHandler(index, e.target.name, e.target.value)}
      />
      <input
        placeholder="brand"
        name="brand"
        onChange={(e) => changeHandler(index, e.target.name, e.target.value)}
      />
      <input
        placeholder="price"
        name="price"
        onChange={(e) => changeHandler(index, e.target.name, e.target.value)}
      />
      <input
        placeholder="origin"
        name="origin"
        onChange={(e) => changeHandler(index, e.target.name, e.target.value)}
      />
      <CategoryEditor
        category="electric"
        subcategory="light"
        isEdit={true}
        handleSave={changeHandler}
        index={index}
      />
      <CompatibleEditor
        modals={[]}
        isEdit={true}
        handleSave={changeHandler}
        index={index}
      />
      <input
        type="file"
        name="img"
        accept="image/png, image/jpeg"
        onChange={(e) => changeHandler(index, e.target.name, e.target.value)}
      />
    </div>
  );
}

export default SingleItemAdder;
