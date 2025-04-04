import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/navbar.css";
import Login from "../components/Login.jsx";
import { FaBars, FaTimes } from "react-icons/fa";
import axios from "axios";
import { BiLogOut } from "react-icons/bi";
function Navbar() {
  const [modal, setModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [activetab, setActiveTab] = useState("Home");
  const changeModal = () => {
    setModal(!modal);
  };
  
  const getuserprofile = async () => {

    let token = localStorage.getItem("userToken");
    const response = await axios.get(`https://ecohub-2.onrender.com/user/profile`,{
      headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`,

      }} );

      console.log("user data",response.data.user);

      try {
        if (response.data) {
          setUser(response.data.user);
        }  
      } catch (error) {


        
      }

  
  };

  useEffect(() => {
    getuserprofile();
  }, []);

  return (
    <div>
      {modal && <Login changeModal={changeModal} setUser={setUser} />}
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
       
        <ul className={menuOpen ? "nav-links open" : "nav-links"}>
          <li
          //border bottom active
             style={
                activetab === "Home" ? {
                  borderBottom: "2px solid #f7b733",
                  color: "#f7b733",
                } : {}
             }
            onClick={() => setActiveTab("Home")}
          ><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li
            style={
              activetab === "About" ? {
                borderBottom: "2px solid #f7b733",
                color: "#f7b733",
              } : {}
            }
            onClick={() => setActiveTab("About")}
          ><Link to="/Pages" onClick={() => setMenuOpen(false)}>Pages</Link></li>
          <li
            style={
              activetab === "Service" ? {
                borderBottom: "2px solid #f7b733",
                color: "#f7b733",
              } : {}
            }
            onClick={() => setActiveTab("Service")}
          ><Link to="/Service" onClick={() => setMenuOpen(false)}>Service</Link></li>
          <li
            style={
              activetab === "Blog" ? {
                borderBottom: "2px solid #f7b733",
                color: "#f7b733",
              } : {}
            }
            onClick={() => setActiveTab("Blog")}
          ><Link to="/Blog" onClick={() => setMenuOpen(false)}>Blog</Link></li>
          <li
            style={
              activetab === "Contact" ? {
                borderBottom: "2px solid #f7b733",
                color: "#f7b733",
              } : {}
            }
            onClick={() => setActiveTab("Contact")}
          ><Link to="/Contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>

        {
          user ? (
            <div className="user-info">
              <span
              style={
                {
                  backgroundColor: "green",
                  color: "white",
                  borderRadius: "50%",
                  // capitalize
                  textTransform: "capitalize",
                  padding: "10px",
                  marginRight: "10px",
                }
              }
              >{user?.firstName[0]} {user?.lastName[0]}</span>
               <BiLogOut className="logout-icon" onClick={() => {
              localStorage.removeItem("userToken");
              localStorage.removeItem("user");
              setUser(null);
            }
            } />
            </div>
          ) : (
            <button className="login-btn" onClick={changeModal}>Login</button>
           
          )
        }
        
        {
          user && user.userRole === "Admin" ? (
            <Link to="/Post" className="admin-link">Dashboard</Link>
          ) : null
        }
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </div>
  );
}

export default Navbar;