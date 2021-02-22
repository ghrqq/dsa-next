import React from "react";
import ItemIconSet from "./Tools/ItemIconSet";
import Options from "./Tools/Options";
import ReplacementItem from "./Tools/ReplacementItem";

export default function SingleItem() {
  return (
    <div className="flex flex-row flex-wrap justify-center p-4 rounded-lg bg-gray-200 text-center items-stretch">
      <div className="h-96 w-64 rounded-3xl p-2 ">
        <div className="w-48 h-48 mx-auto bg-red-400">IMG</div>
        <div className="text-gray-900 text-xl">15618-13575</div>
        <div className="text-gray-900 text-2xl font-semibold">Brand</div>
        <div className="container">
          <div className="font-medium">Compatible Models</div>
          <div className="border inline-block border-gray-50 px-2 rounded-3xl">
            #MT048
          </div>
          <div className="border inline-block border-gray-50 px-2 rounded-3xl">
            #MT0548
          </div>
          <div className="border inline-block border-gray-50 px-2 rounded-3xl">
            #048HJG
          </div>
          <div className="border inline-block border-gray-50 px-2 rounded-3xl">
            #M48
          </div>
          <div className="border inline-block border-gray-50 px-2 rounded-3xl">
            #asca48
          </div>
          <div className="border inline-block border-gray-50 px-2 rounded-3xl">
            #1512z
          </div>
        </div>
      </div>
      <div className="h-96 w-64 rounded-3xl p-2 ">
        <div className="text-xs mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          perspiciatis quos molestiae dolores quas ea laudantium.
        </div>
        <div className="my-2">
          <ItemIconSet direction="row" />
        </div>
        <Options displayOnly={true} />
        <div className="text-xl text-gray-900">18.80 USD</div>
        <button className="text-xl bg-green-400 text-gray-50 text-center px-8 rounded-full py-1">
          ADD TO CART
        </button>
      </div>
      <div className="h-96 w-64 rounded-3xl p-2 ">
        <ReplacementItem />
        <ReplacementItem />
        <ReplacementItem />
        <ReplacementItem />
        <button className="font-semibold mx-auto my-6">
          See All Replacements
        </button>
      </div>
    </div>
  );
}
