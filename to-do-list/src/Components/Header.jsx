import React from "react";
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <div className="logo">
          <img src={logo} alt="todolist" />
          <p className="main_header">To-Do-List</p>
        </div>
      </nav>
    </header>
  );
};

export default Header;
