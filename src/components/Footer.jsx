import React from "react";
import "../styles/footer.css"; // Import the CSS
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Column 1 - About */}
        <div className="footer-about">
          <h3>RECA</h3>
          <p>
            Rwanda Eco-Conservation Alliance is dedicated to environmental protection through sustainable waste 
            management and recycling initiatives.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Our Services</a></li>
            <li><a href="/contact">Contact</a></li>
       
          </ul>
        </div>

        {/* Column 3 - Contact Info */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: info@reca.org</p>
          <p>Phone: +250 788 123 456</p>
          <p>Address: Kigali, Rwanda</p>
        </div>

        {/* Column 4 - Social Media */}
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

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} RECA. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
