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
      
      <div className="recycling-text">
        <span className="badge">WASTE DISPOSAL & RECYCLING SERVICES IN COMMERCIAL & DOMESTIC</span>
        <h2 className="title">The Pioneers In The<br/>
             Recycling Service!</h2>
        <p className="subtitle">
          We are providing effective waste disposal & recycling services<br/>
           with our modern technologies,we serve commonly, client first<br/>
           priority.

        </p>
        <p className="description">
          How can we create a better environment for the future through waste recycling?<br/>
           We believe thebest strategy is to stop waste from entering the ocean <br/>
           in the first place.
        </p>

        
        <div className="features">
          <div className="feature-item">
            <FaBriefcase className="icon" />
            <p>Ontime<br/> Scheduled</p>
          </div>
          <div className="feature-item">
            <FaClock className="icon" />
            <p>24/7<br/> Services</p>
          </div>
          <div className="feature-item">
            <FaMoneyBillWave className="icon" />
            <p>Affordable<br/> Cost</p>
          </div>
        </div>
      </div>

      
      <div className="recycling-image">
        <img src={recycling} alt="Recycling People" />
      
      </div>
    </section>
    </div>
  );
}

export default Home;
