import React from "react";
import { Outlet,Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useState } from "react";
import "../styles/navbar.css"

import Login from "../components/Login.jsx";
function Navbar(){

  const [modal,setModal] = useState(false);

const changeModal = () => {
  setModal(!modal)
}

    return(
        <div >
         {modal && <Login changeModal = {changeModal}/>}
      <div className="navbar">
      <div className="logo"><img src={logo} alt="logo"/></div>
      <ul>
     
       <li><Link to="/">Home</Link></li>
       <li><Link to="/Pages">Pages</Link></li>
       <li><Link to="/Service">Service</Link></li>
       <li><Link to="/Blog">Blog</Link></li>
       <li><Link to="/Contact">Contact</Link></li>
       {/* <FaUserCircle className="user" /> */}
       
       </ul>
       <button className="login"onClick={changeModal}>login</button>
      
       </div>
     </div>
      
    )
}
export default Navbar;