import React from "react";
import { FaHome, FaFileAlt, FaComments, FaUsers, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Dashboardstyles/sidebar.css"; 

const Sidebar = () => {
  return (
    <div className="sidebar">
   
      <div className="sidebar-header">Admin Dashboard</div>

      <nav className="sidebar-nav">
        <ul>
          <li>
            {/* <Link to="/" className="sidebar-link">
              <FaHome className="icon" /> Home
            </Link> */}
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
        <button className="logout-btn">
          <FaSignOutAlt className="icon" /> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
