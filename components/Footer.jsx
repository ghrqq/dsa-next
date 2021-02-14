import React from "react";
import CategoryBox from "./CategoryBox";

export default function Footer() {
  return (
    <div className="w-full bg-gray-900 ">
      <div className="flex flex-col sm:flex-row  justify-between items-center mx-auto my-8 px-12 py-24">
        <div className="w-52">
          <div className="text-gray-50">
            <p>Would you like to join our newsletter?</p>
          </div>
          <div>
            <input type="text" className="w-48 rounded-full px-4 py-2" />
          </div>
          <button className="w-48 bg-green-400 my-2 text-green-50 text-xl rounded-full text-center">
            SUBSCRIBE
          </button>
        </div>
        {/* <div className="w-52 text-gray-50 text-center">
          <ul>
            <li>Cat1</li>
            <li>Cat1</li>
            <li>Cat1</li>
            <li>Cat1</li>
            <li>Cat1</li>
          </ul>
        </div> */}

        <CategoryBox footer={true} />
        <div className="w-60 text-gray-50 text-center">
          <div>Lypskaya Str. No: 191 </div>
          <div className="logo text-4xl text-center justify-self-start inline-block text-gray-100 p-2">
            DSA <br /> AUTO
          </div>
        </div>
      </div>
      <div className="mx-auto text-center text-gray-100">
        All rights reserved &copy;{" "}
        <a href="http://theoz.dev" rel="norefferer">
          Theo OZ
        </a>
      </div>
    </div>
  );
}
