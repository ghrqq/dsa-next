import React from "react";

export default function Login() {
  return (
    <div className="flex flex-col sm:flex-row justify-evenly items-center">
      <input
        className="w-48 my-2 sm:ml-8 bg-gray-100 pl-3"
        type="text"
        placeholder="Email"
      />
      <input
        className="w-48 my-2 sm:ml-8 bg-gray-100 pl-3"
        type="password"
        placeholder="Password"
      />
      <button className="text-green-400 p-6 ml-2 text-2xl">LOGIN</button>
    </div>
  );
}
