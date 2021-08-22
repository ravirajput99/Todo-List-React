import React from "react";
import logo from "../assets/images/newton.png";
const Header = () => {
  return (
    <header className="header">
      <nav>
        <div>
          <img src={logo} alt="TodoList"></img>
        </div>
      </nav>
    </header>
  );
};
export default Header;
