import React from "react";
import "../styles/Home.css"; 
import { FaClock, FaMoneyBillWave, FaBriefcase } from "react-icons/fa";
import recycling from "../assets/recycling.jpg"
function Home() {
  return (
    <div>
    <div className="home-container">
      <div className="home-content">
        <p className="home-subtitle">Recycle & Manage Waste Responsibly!</p>
        <h1 className="home-title">Thought Solution to <br /> Safe Environment</h1>
        <p className="home-description">
        "We aim to reduce waste and promote recycling through technology. Our platform provides tools, education, and a marketplace for eco-friendly solutions."
        </p>
        <button className="home-button">  LEARN MORE  </button>
         
     
      </div>
    
    </div>
    <section className="recycling-section">
      {/* Left Content */}
      <div className="recycling-text">
        <span className="badge">WASTE DISPOSAL & RECYCLING SERVICES IN COMMERCIAL & DOMESTIC</span>
        <h2 className="title">The Pioneers In The
             Recycling Service!</h2>
        <p className="subtitle">
          We are providing effective waste disposal & recycling services with our modern technologies.
          Our priority is always the client.
        </p>
        <p className="description">
          How can we create a better environment for the future through waste recycling? We believe the
          best strategy is to stop waste from entering the ocean in the first place.
        </p>

        {/* Features Section */}
        <div className="features">
          <div className="feature-item">
            <FaBriefcase className="icon" />
            <p>Ontime Scheduled</p>
          </div>
          <div className="feature-item">
            <FaClock className="icon" />
            <p>24/7 Services</p>
          </div>
          <div className="feature-item">
            <FaMoneyBillWave className="icon" />
            <p>Affordable Cost</p>
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="recycling-image">
        <img src={recycling} alt="Recycling People" />
        <div className="stat-box">
          <h3>2463</h3>
          <p>Happy Customers</p>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Home;
