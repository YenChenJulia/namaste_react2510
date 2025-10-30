// import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./Header";
import Body from "./Body";




const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));

root.render(<AppLayout />);
