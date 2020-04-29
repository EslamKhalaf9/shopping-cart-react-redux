import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="p-5 bg-white shadow-md fixed w-full flex sm:justify-between justify-center top-0">
      <h1 className="text-2xl hidden sm:block">Shopping</h1>
      <ul className="flex">
        <li className="m-2">
          <Link to="/">Home</Link>
        </li>
        <li className="m-2">
          <Link to="./categories">Categories</Link>
        </li>
        <li className="m-2">
          <a href="/">About</a>
        </li>
        <li className="m-2">
          <Link to="./cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
