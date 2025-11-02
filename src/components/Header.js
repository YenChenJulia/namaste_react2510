import { logo_url } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [btnName, setBtnName] = useState("login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo_url} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact</li>
          <li>Cart</li>
          <li
            className="login-btn"
            onClick={() => {
              btnName === "login" ? setBtnName("logout") : setBtnName("login");
            }}
          >
            {btnName}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
