import { logo_url } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("login");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header shadow-lg bg-white sticky top-0 z-50">
      <div className="flex justify-between items-center px-4 py-3 md:px-6 md:py-4">
        <div className="logo-container">
          <img className="logo w-16 md:w-24 h-auto" src={logo_url} alt="logo" />
        </div>

        {/* 漢堡選單按鈕 (手機版) */}
        <button
          className="md:hidden text-gray-700 hover:text-orange-500 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* 桌面版選單 */}
        <div className="nav-items hidden md:block">
          <ul className="flex items-center gap-6 lg:gap-8 text-base lg:text-lg font-medium">
            <li className="flex items-center gap-2">
              <span className="text-gray-600 text-sm lg:text-base">
                Status:
              </span>
              <span
                className={`${
                  onlineStatus ? "text-green-500" : "text-red-500"
                } font-bold`}
              >
                {onlineStatus ? "●" : "●"}
              </span>
            </li>
            <li className="hover:text-orange-500 transition-colors">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-orange-500 transition-colors">
              <Link to="/about">About us</Link>
            </li>
            <li className="hover:text-orange-500 transition-colors">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="hover:text-orange-500 transition-colors">
              <Link to="/grocery">Grocery</Link>
            </li>
            <li>
              <button
                className="login-btn bg-orange-500 hover:bg-orange-600 text-white px-4 lg:px-6 py-2 rounded-lg transition-colors cursor-pointer"
                onClick={() => {
                  btnName === "login"
                    ? setBtnName("logout")
                    : setBtnName("login");
                }}
              >
                {btnName}
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* 手機版選單 (下拉) */}
      <div
        className={`md:hidden ${
          isMenuOpen ? "block" : "hidden"
        } bg-white border-t border-gray-200`}
      >
        <ul className="flex flex-col py-4 px-4 space-y-4 font-medium">
          <li className="flex items-center gap-2 pb-2 border-b border-gray-100">
            <span className="text-gray-600">Status:</span>
            <span
              className={`${
                onlineStatus ? "text-green-500" : "text-red-500"
              } font-bold`}
            >
              {onlineStatus ? "●" : "●"}
            </span>
          </li>
          <li className="hover:text-orange-500 transition-colors py-2">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li className="hover:text-orange-500 transition-colors py-2">
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>
              About us
            </Link>
          </li>
          <li className="hover:text-orange-500 transition-colors py-2">
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </li>
          <li className="hover:text-orange-500 transition-colors py-2">
            <Link to="/grocery" onClick={() => setIsMenuOpen(false)}>
              Grocery
            </Link>
          </li>
          <li className="pt-2">
            <button
              className="w-full login-btn bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-colors cursor-pointer"
              onClick={() => {
                btnName === "login"
                  ? setBtnName("logout")
                  : setBtnName("login");
                setIsMenuOpen(false);
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
