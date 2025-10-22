import React from "react";
import { createRoot } from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://shoplineimg.com/5d04dbdc2415b30001d56de4/5ea81425476b600036c5648c/450x.webp?source_format=png"
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
