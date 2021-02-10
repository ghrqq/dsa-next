import React, { useContext } from "react";
import Image from "next/image";
import { ConfigContext } from "../../themes/Layout";

export default function LanguageSetter() {
  const [config, setconfig] = useContext(ConfigContext);
  return (
    <div className="flex flex-row justify-center items-center  ">
      <button
        value="ru"
        onClick={() => setconfig({ lang: "ru" })}
        className="ml-1"
      >
        <Image src="/icons/russia.png" height={36} width={36} alt="Russian" />
      </button>

      <button
        value="uk"
        onClick={() => setconfig({ lang: "uk" })}
        className="ml-1"
      >
        <Image
          src="/icons/ukraine.png"
          height={36}
          width={36}
          alt="Ukrainien"
        />
      </button>

      <button
        value="en"
        onClick={() => setconfig({ lang: "en" })}
        className="ml-1"
      >
        <Image src="/icons/uk.png" height={36} width={36} alt="English" />
      </button>
    </div>
  );
}
