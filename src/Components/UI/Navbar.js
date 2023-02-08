import React from "react";
import "./Navbar.css";

const Navbar = ({ setToken }) => {
  const logoutHandler = (event) => {
    event.preventDefault();
    setToken("");
    localStorage.clear();
  };
  return (
    <div className="nav">
      <h1>Products</h1>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
};
export default Navbar;
