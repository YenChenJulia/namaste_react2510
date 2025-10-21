import React from "react";
import { createRoot } from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="https://www.shutterstock.com/image-vector/mobile-accessories-shop-logo-design-260nw-1971174995.jpg"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return <div className="app">{<Header />}</div>;
};

const root = createRoot(document.getElementById("root"));

root.render(<AppLayout />);
