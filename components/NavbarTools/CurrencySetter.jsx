import React, { useContext } from "react";
import { ConfigContext } from "../../pages/_app";

export default function CurrencySetter() {
  const [lang, setlang, currency, setcurrency, rate] = useContext(
    ConfigContext
  );

  return (
    <div className="w-20  flex flex-col justify-center items-center mr-4">
      <select
        className="bg-gray-700"
        name=""
        id=""
        defaultValue={currency}
        // value={config.currency}
        onChange={(e) => setcurrency(e.target.value)}
      >
        <option value="UAH">UAH</option>
        <option value="USD">USD</option>
      </select>

      <span className="text-red-400 text-xs text-center w-full">
        {currency === "USD" ? rate : Number(1 / rate).toFixed(2)}
        {currency === "USD" ? " UAH" : " USD"}
      </span>
    </div>
  );
}
