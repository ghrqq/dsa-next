import React, { useState } from "react";

import SingleItemAdder from "../../components/ProtectedComponents/SingleItemAdder";
import Layout from "../../themes/Layout";

function addproducts() {
  const [state, setstate] = useState([{}]);
  const [count, setcount] = useState(0);

  const handleChange = (index, nam, val) => {
    let temp = state;
    temp[index][nam] = val;
    setcount(count + 1);
    setstate(temp);
  };

  const adder = () => {
    setstate([...state, {}]);
  };

  return (
    <Layout>
      {state.map((item) => (
        <SingleItemAdder
          index={state.indexOf(item)}
          changeHandler={handleChange}
        />
      ))}

      {state.length <= 10 ? (
        <button
          className="w-full bg-green-400 text-center text-gray-50"
          onClick={adder}
        >
          Add
        </button>
      ) : null}
    </Layout>
  );
}

export default addproducts;
