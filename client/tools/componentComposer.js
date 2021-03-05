import Link from "next/link";

export default function componentComposer(val) {
  if (val === 1) {
    //Admin
    return (
      <div className="flex flex-row flex-wrap justify-start items-center">
        <div className="text-gray-100 hover:text-green-400 ml-4  text-xl">
          <Link href="/protected/orders">Orders</Link>
        </div>
        <div className="text-gray-100 hover:text-green-400 ml-4  text-xl">
          <Link href="/protected/manageproducts">Products</Link>
        </div>
        <div className="text-gray-100 hover:text-green-400 ml-4  text-xl">
          <Link href="/protected/addproducts">Add Products</Link>
        </div>
        <div className="text-gray-100 hover:text-green-400 ml-4  text-xl">
          <Link href="/protected/managecustomers">Customers</Link>
        </div>
        <div className="text-gray-100 hover:text-green-400 ml-4  text-xl">
          <Link href="/protected/configurations">Configurations</Link>
        </div>
        <div className="text-gray-100 hover:text-green-400 ml-4  text-xl">
          <Link href="/protected/users">Users</Link>
        </div>
      </div>
    );
  }
  if (val === "0") {
    // Customer
    return (
      <div className="flex flex-row flex-wrap justify-start items-center">
        <div className="text-gray-100 hover:text-green-400 ml-4  text-xl">
          <Link href="/user/orders">My Orders</Link>
        </div>
        <div className="text-gray-100 hover:text-green-400 ml-4  text-xl">
          <Link href="/user/profile">My Profile</Link>
        </div>
      </div>
    );
  }
  if (val === 3) {
    // Employee
    return (
      <div className="flex flex-row flex-wrap justify-start items-center">
        <div className="text-gray-100 hover:text-green-400 ml-4  text-xl">
          <Link href="/manager/orders">Orders</Link>
        </div>
        <div className="text-gray-100 hover:text-green-400 ml-4  text-xl">
          <Link href="/manager/customers">Customers</Link>
        </div>
      </div>
    );
  }
}
