import React, { useState } from "react";
import CartContainer from "./CartContainer";
import OrderForm from "./OrderForm";

export default function Cart() {
  const [step, setstep] = useState(0);

  const stepHandler = (direction) => {
    setstep(step + direction);
  };

  const componentProvider = () => {
    if (step === 0) {
      return <CartContainer stepper={stepHandler} />;
    }
    if (step === 1) {
      return <OrderForm stepper={stepHandler} />;
    }
  };

  return <div className="w-full">{componentProvider()}</div>;
}
