import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeMode";
import "../styles/common-styles.scss";
import amazonLogo from "../assets/amazon.png";

const NavBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/">
            <img src={amazonLogo} alt="Company Logo" className="logo" />
          </Link>
        </div>
        <div className={`navbar-links ${isOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" onClick={toggleMenu}>
                Products
              </Link>
            </li>
            <li>
              <Link to="/cart" onClick={toggleMenu}>
                Cart
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleMenu}>
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar bar1 ${isOpen ? "open" : ""}`}></div>
          <div className={`bar bar2 ${isOpen ? "open" : ""}`}></div>
        </div>
        <div className="theme-switch-container">
          <label className="switch">
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={toggleTheme}
            />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
