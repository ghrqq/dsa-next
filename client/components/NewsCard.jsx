import React from "react";

export default function NewsCard() {
  return (
    <div className="sm:w-4/12 w-11/12 p-4 h-2/6 sm:h-full flex sm:flex-col justify-evenly items-center">
      <div className="w-2/3 h-5/6 bg-indigo-400 p-4">IMAGE</div>
      <div className="text-base p-4">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
          laborum debitis qui laudantium accusamus, asperiores maxime maiores
          vitae soluta, mollitia, optio non iusto dolorum atque. Quos,
          doloremque? Tempore, officia vero.
        </p>
      </div>
      <button className="text-green-400 text-2xl font-bold">Learn More</button>
    </div>
  );
}
