import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/navbar.css";
import Login from "../components/Login.jsx";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [modal, setModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const changeModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      {modal && <Login changeModal={changeModal} />}
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
       
        <ul className={menuOpen ? "nav-links open" : "nav-links"}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/Pages" onClick={() => setMenuOpen(false)}>Pages</Link></li>
          <li><Link to="/Service" onClick={() => setMenuOpen(false)}>Service</Link></li>
          <li><Link to="/Blog" onClick={() => setMenuOpen(false)}>Blog</Link></li>
          <li><Link to="/Contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
        <button className="login" onClick={changeModal}>Login</button>
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
