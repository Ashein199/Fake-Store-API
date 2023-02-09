import React from "react";
import { Button, Space } from "antd";
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
      <Space
        direction="vertical"
        style={{
          width: "150px",
        }}
      >
        <Button onClick={logoutHandler} danger block>
          Logout
        </Button>
      </Space>
    </div>
  );
};
export default Navbar;
