import React, { useState } from "react";
import categories from "../../categories.json";

function CategoryEditor({ category, subcategory, isEdit, handleSave, index }) {
  const [cat, setcat] = useState(category);
  const [subCat, setsubCat] = useState(subcategory);

  const handleChange = (nam, e) => {
    let val = e.target.value;
    if (index === undefined) {
      if (nam === "category") {
        handleSave("category", val);
        setcat(val);
        return;
      }
      if (nam === "subcategory") {
        handleSave("subcategory", val);
        setsubCat(val);
        return;
      }
    } else {
      if (nam === "category") {
        handleSave(index, "category", val);
        setcat(val);
        return;
      }
      if (nam === "subcategory") {
        handleSave(index, "subcategory", val);
        setsubCat(val);
        return;
      }
    }
    return;
  };

  return (
    <div className="flex flex-row justify-center items-center">
      <select disabled={!isEdit} onChange={(e) => handleChange("category", e)}>
        {cat === category ? (
          <option value={category} defaultValue={true}>
            {" "}
            {category}
          </option>
        ) : null}
        {categories.map((i) => (
          <option value={i.name}>{i.name}</option>
        ))}
      </select>

      <select
        disabled={!isEdit}
        onChange={(e) => handleChange("subcategory", e)}
      >
        {subCat === subcategory ? (
          <option value={subcategory} defaultValue={true}>
            {" "}
            {subcategory}
          </option>
        ) : null}

        {categories
          .filter((i) => i.name === cat)[0]
          .children.map((i) => (
            <option val={i}>{i}</option>
          ))}
      </select>
    </div>
  );
}

export default CategoryEditor;
