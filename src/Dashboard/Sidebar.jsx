import React, { useEffect, useState } from "react";
import { FaHome, FaFileAlt, FaComments, FaUsers, FaSignOutAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./Dashboardstyles/sidebar.css"; 
import axios from "axios";

const Sidebar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const getuserprofile = async () => {
    let token = localStorage.getItem("userToken");
    const response = await axios.get(`https://ecohub-2.onrender.com/user/profile`,{
      headers: {
          "Content-Type": "application/json",
          'Authorization':`Bearer ${token}`,

      }} );

      console.log("user data",response.data.user);

      try {
        if (response.data) {
          setUser(response.data.user);
        }  
      } catch (error) {
        localStorage.removeItem("userToken");
        localStorage.removeItem("user");
        navigate("/Home"); 
      }

  
  };

  useEffect(() => {
    getuserprofile();
  }, []);
  return (
    <div className="sidebar">
   
      <div className="sidebar-header">{user?.firstName} {user?.lastName}</div>

      <nav className="sidebar-nav">
        <ul>
          <li>
           
          </li>
          <li>
            <Link to="/Post" className="sidebar-link">
              <FaFileAlt className="icon" /> Posts
            </Link>
          </li>
          <li>
            <Link to="/Comment" className="sidebar-link">
              <FaComments className="icon" /> Comments
            </Link>
          </li>
          <li>
            <Link to="/User" className="sidebar-link">
              <FaUsers className="icon" /> Users
            </Link>
          </li>
        </ul>
      </nav>

     
      <div className="sidebar-footer">
        <button className="logout-btn"
        onClick={
          ()=>{
            localStorage.removeItem("userToken");
            localStorage.removeItem("user");
            navigate("/Home");
          }
        }
        >
          <FaSignOutAlt className="icon" /> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;