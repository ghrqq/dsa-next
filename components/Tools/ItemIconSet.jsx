import React from "react";
import Image from "next/image";

export default function ItemIconSet({ direction, bg }) {
  return (
    <div className={`flex flex-${direction} justify-evenly items-center ${bg}`}>
      <div>
        <Image
          src="/icons/check.png"
          width={24}
          height={24}
          alt="Verified producer."
        />
      </div>
      <div>
        <Image
          src="/icons/fast.png"
          width={24}
          height={24}
          alt="Fast delivery."
        />
      </div>{" "}
      <div>
        <Image src="/icons/russia.png" width={24} height={24} alt="Origin" />
      </div>
    </div>
  );
}
