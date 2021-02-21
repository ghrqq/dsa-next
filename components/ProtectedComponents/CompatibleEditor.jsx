import React, { useState } from "react";

export default function CompatibleEditor({
  modals,
  isEdit,
  handleSave,
  index,
}) {
  const [compatible, setcompatible] = useState(modals);
  const [inputVal, setinputVal] = useState("");

  const handleAdd = () => {
    let temp = compatible;
    let index = compatible.indexOf(inputVal);
    if (index >= 0) {
      return;
    }

    temp.push(inputVal);
    setcompatible(temp);
    setinputVal("");
  };

  const handleRemove = (val) => {
    let temp = compatible;
    let removed = temp.filter((i) => i !== val);
    setcompatible(removed);
  };

  return (
    <div className="bg-indigo-200 px-4">
      {compatible.map((i) => (
        <div className="inline-block border rounded-full px-2 mx-2">
          {i}{" "}
          <button
            className="inline-block ml-2 text-xl"
            onClick={() => handleRemove(i)}
            disabled={!isEdit}
          >
            &times;
          </button>
        </div>
      ))}
      <input
        className="mx-2"
        placeholder="Add compatible modal."
        value={inputVal}
        onChange={(e) => setinputVal(e.target.value)}
        disabled={!isEdit}
      />
      <button
        className="mx-2"
        onClick={handleAdd}
        disabled={inputVal.length < 1 ? true : false}
      >
        Add
      </button>
      <button
        disabled={!isEdit}
        className="mx-2"
        onClick={
          index !== undefined
            ? () => handleSave(index, "compatible", compatible)
            : () => handleSave("compatible", compatible)
        }
      >
        Save {index !== undefined ? console.log(index) : console.log("shit")}
      </button>
    </div>
  );
}
