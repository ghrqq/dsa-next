import React, { useState } from "react";

export default function FindProducts({ itemGetter, stateSetter }) {
  return (
    <div className="mx-auto flex flex-row justify-center items-stretch">
      <textarea
        placeholder="You may copy or type item numbers up to ten items."
        rows={11}
        cols={10}
        className="px-4 py-2 border rounded-xl my-8 resize-none"
        onChange={(e) => stateSetter(e)}
      />
      <div className="flex flex-col justify-center items-stretch">
        <button
          className="bg-green-400 h-1/2 text-gray-50 px-4 py-2 mx-2 hover:bg-gray-400 mt-8 rounded-t-xl"
          onClick={itemGetter}
        >
          Find
        </button>
        <button
          className="bg-red-400 h-1/2 text-gray-50 px-4 py-2 mx-2 hover:bg-gray-400  rounded-b-xl mb-8"
          onClick={itemGetter}
        >
          Find Deactive Products
        </button>
      </div>
    </div>
  );
}
