import React from "react";
import Image from "next/image";

export default function LanguageSetter() {
  return (
    <div className="flex flex-row justify-center items-center  ">
      <div className="ml-1">
        <Image src="/icons/russia.png" height={36} width={36} alt="Russian" />
      </div>

      <div className="ml-1">
        <Image
          src="/icons/ukraine.png"
          height={36}
          width={36}
          alt="Ukrainien"
        />
      </div>

      <div className="ml-1">
        <Image src="/icons/uk.png" height={36} width={36} alt="English" />
      </div>
    </div>
  );
}
