import React, { useState } from "react";
import axios from "axios";
import "../styles/contact.css";
import { CiLocationOn } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://ecohub-2.onrender.com/contact/contact", formData);
      alert(response.data.message);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      alert("Error submitting message. Try again!");
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Get Appointment starting a New Project?</h2>
        <div className="contact-detail">
          <CiLocationOn className="cont"/>
          <p><strong>Address</strong></p>
          <p>KIGALI, RWANDA</p>
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
        <p>Please put up a topic below related to your inquiry. If you don’t find what you need, fill out our contact form.</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="input-group">
            <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
            <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
          </div>
          <textarea name="message" placeholder="Write a Message" value={formData.message} onChange={handleChange} required></textarea>
          <button type="submit">SEND A MESSAGE</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
