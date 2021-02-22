import React from "react";
import NewsCard from "./NewsCard";

export default function NewsDisplay() {
  return (
    <div className="w-11/12 my-4 h-auto sm:h-full md:h-5/6 sm:w-9/12 bg-gray-200 rounded-3xl p-4  flex flex-col sm:flex-row justify-evenly items-center">
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </div>
  );
}
