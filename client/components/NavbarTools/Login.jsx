import React, { useContext, useState } from "react";
import { UserContext } from "../../pages/_app";
import axios from "axios";

export default function Login() {
  const [user, setuser, isLoggedIn, setisLoggedIn] = useContext(UserContext);
  const [state, setstate] = useState({});

  const handleChange = (e) => {
    let val = e.target.value;
    let nam = e.target.name;

    let temp = state;

    temp[nam] = val;

    setstate(temp);
  };

  const handleSubmit = () => {
    axios({
      method: "post",
      url: "http://localhost:4000/login",
      data: state,
      withCredentials: true,
    }).then((res) => {
      if (res.status === 200) {
        setisLoggedIn(true);
        setuser(res.data.user);
      }
    });
  };

  return (
    <div className="flex flex-col sm:flex-row justify-evenly items-center flex-wrap">
      <input
        className="w-48  sm:ml-8 bg-gray-100 pl-3"
        type="text"
        placeholder="Email"
        name="email"
        value={state.email}
        onChange={handleChange}
      />
      <input
        className="w-48  sm:ml-8 bg-gray-100 pl-3"
        type="password"
        placeholder="Password"
        name="password"
        value={state.password}
        onChange={handleChange}
      />
      <button
        className="text-green-400  ml-2 text-2xl"
        // onClick={() => setisLoggedIn(!isLoggedIn)}
        onClick={() => handleSubmit()}
      >
        LOGIN
      </button>
    </div>
  );
}
