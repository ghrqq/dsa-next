import React from "react";
import CategoryBox from "../components/CategoryBox";
import Layout from "../themes/Layout";

export default function Search() {
  return (
    <Layout>
      <div className="w-auto  h-auto  flex flex-col sm:flex-row justify-evenly z-50 items-start">
        <div className="sm:sticky sm:left-4 sm:top-28 mt-0 mx-auto ">
          <div className="flex flex-col  justify-center items-center space-x-4 ">
            <CategoryBox />
          </div>
        </div>

        <div className="flex flex-row flex-wrap justify-center p-4 rounded-lg bg-gray-200 text-center items-stretch">
          <div className="h-96 w-64 rounded-3xl p-2 ">ABC</div>
          <div className="h-96 w-64 rounded-3xl p-2 ">ABC</div>
        </div>
      </div>
    </Layout>
  );
}
