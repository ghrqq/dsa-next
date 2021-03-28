import React, { useState, useEffect, useContext } from "react";
import UserDetails from "../../components/ManagerComponents/UserDetails";
import Layout from "../../themes/Layout";
import { UserContext } from "../../pages/_app";
// import users from "../../user.json"
import axios from "axios";

export default function customers({ auth }) {
  const [isExpand, setisExpand] = useState("");
  const [users, setusers] = useState([]);
  const [type, settype] = useState("0");
  const [user, setuser, isLoggedIn, setisLoggedIn] = useContext(UserContext);

  const detailProvider = (val) => {
    if (val === isExpand) {
      setisExpand("");
      return;
    }
    setisExpand(val);
  };

  useEffect(() => {
    if (!user || !user.token) {
      console.log("You have to login.");
      return;
    } else {
      axios({
        method: "post",
        url: "http://localhost:4000/man/getcustomers",
        headers: { authorization: `Bearer ${user.token}` },
        data: {
          role: type,
          reqrole: user.role,
        },
      }).then((res) => {
        if (res.status === 200) {
          setusers(res.data.users);
        } else {
          console.log("Request failed");
        }
      });
    }
  }, [user, type]);

  return (
    <Layout>
      <div className="w-5/6 mx-auto flex flex-col sm:flex-row  justify-evenly items-center cursor-pointer border bg-gray-600 no-print">
        <div className="w-1/6">ID#</div>
        <div className="w-1/6">Name</div>
        <div className="w-1/6">Surname</div>
        <div className="w-1/6">Sale Rate</div>
        <div className="w-1/6">Agent</div>
        <div className="w-1/6">Details</div>
      </div>
      {/* TODO: Admin options will be added */}

      {users.length === 0
        ? "No data"
        : users.map((user) => (
            <div>
              <div className="w-5/6 mx-auto flex flex-col sm:flex-row  justify-evenly items-center cursor-pointer border bg-gray-400 no-print">
                <div className="w-1/6">{user._id}</div>
                <div className="w-1/6">{user.name}</div>
                <div className="w-1/6">{user.surname}</div>
                <div className="w-1/6">{user.sale}</div>
                <div className="w-1/6">{user.agent}</div>
                <div className="w-1/6" onClick={() => detailProvider(user._id)}>
                  {isExpand === user._id ? "-" : "+"}
                </div>
              </div>

              <div className={isExpand === user._id ? "null" : "hidden"}>
                {isExpand === user._id ? <UserDetails user={user.id} /> : null}
              </div>
            </div>
          ))}

      {/* TODO: User Addresses will be add here */}
    </Layout>
  );
}
