import React from "react";
import ReactDOM from "react-dom/client";
import myImage from "./logofinal.png";
/**
 * * Planning
 * Header
 *   - Logo
 *   - Nav Items
 * Body
 *   - Search bar
 *   - Card/Restaurant Container
 *           - Restaurant Card
 * Footer
 *   - Copyright
 *   - Links
 *   - Address, Contact info.
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={myImage} id="logo-image" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
