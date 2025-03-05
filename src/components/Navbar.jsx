import React from "react";
import { Outlet,Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "../styles/navbar.css"
function Navbar(){
    return(
        <div>
      <div className="navbar">
       
      <ul>

       <li><Link to="/">Home</Link></li>
       <li><Link to="/Pages">Pages</Link></li>
       <li><Link to="/Service">Service</Link></li>
       <li><Link to="/Blog">Blog</Link></li>
       <li><Link to="">Contact</Link></li>
       {/* <FaUserCircle className="user" /> */}
       <button className="login">login</button>
       </ul>
      
       </div>
     </div>
      
    )
}
export default Navbar;