import React from "react";
import "../styles/contact.css";
import { CiLocationOn } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";


const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Get Appointment starting a New Project?</h2>
        <div className="contact-detail">
        <CiLocationOn className="cont"/>
          <p><strong>Address</strong></p>
          <p>KIGALI,RWANDA</p>
        </div>
        <div className="contact-detail">
        <LuPhone className="cont"/>
          <p><strong>Phone</strong></p>
          <p>Mobile: +250 794469581</p>
        
        </div>
        <div className="contact-detail">
        <MdOutlineMail className="cont" />
          <p><strong>Email</strong></p>
          <p>support@ecohub.com</p>
        </div>
      </div>

      <div className="contact-form">
        <h3>LET'S GET IN TOUCH</h3>
        <h2>Send Us a Message</h2>
        <p>Please put up a topic below related to your inquiry. If you don’t find what you need,<br/>
         fill out our contract form.</p>
        <form>
          <div className="input-group">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Email Address" />
          </div>
          <div className="input-group">
            <input type="tel" placeholder="Phone Number" />
            <input type="text" placeholder="Subject" />
          </div>
          <textarea placeholder="Write a Message"></textarea>
          <button type="submit">SEND A MESSAGE</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
