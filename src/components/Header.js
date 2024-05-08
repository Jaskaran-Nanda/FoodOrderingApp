import { useState } from "react";
import myImage from "../utils/logoipsum-331.svg";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const data = useContext(UserContext);
  const [btnName, setBtnName] = useState("Login");

  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between shadow-md mb-2 items-center ">
      <div className="logo w-32 m-4">
        <img src={myImage} className="w-32" />
      </div>
      <div className="nav-items items-center">
        <ul className="flex  m-4 ">
          <li className="p-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="p-4 border-white border-2 rounded-xl hover:border-gray-200">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="p-4 border-white border-2 rounded-xl hover:border-gray-200">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="p-4 border-white border-2 rounded-xl hover:border-gray-200">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li className="p-4 border-white border-2 rounded-xl hover:border-gray-200">
            <Link to={"/grocery"}>Groceries</Link>
          </li>
          <li className="p-4 border-white border-2 rounded-xl hover:border-gray-200 font-semibold text-lg">
            <Link to={"/cart"}>Cart ({cartItems.length})</Link>
          </li>
          <button
            className="login-button p-4 border-zinc-900 border-2 rounded-xl hover:border-gray-200"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="p-4 font-bold">{data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
