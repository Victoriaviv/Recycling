import React from "react";
import "../styles/footer.css"; 
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
      
        <div className="footer-about">
        <div className="log"><img src={logo} alt="logo"/></div>
          <h3>EcoHub</h3>
          <p>
           EcoHub essentially means a central platform or space dedicated to eco-friendly initiatives, solutions, or services. 
          
          </p>
        </div>

       
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/pages">About Us</a></li>
            <li><a href="/service">Our Services</a></li>
            <li><a href="/contact">Contact</a></li>
       
          </ul>
        </div>

        
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: info@ecohub.org</p>
          <p>Phone: +250 788 123 456</p>
          <p>Address: Kigali, Rwanda</p>
        </div>

      
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>
      </div>

   
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} EcoHub. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
