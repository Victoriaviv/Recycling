import React from "react";
import "../styles/pages.css"; // Importing the CSS file
import background from "../assets/background.jpg";
import metal from "../assets/metal.jpg";
import plastic from "../assets/plastic.jpg"

const Pages = () => {
  const steps = [
    { id: "01", title: "Collection Wastage", icon: "♻️" },
    { id: "02", title: "Pickup Wastage", icon: "🚛" },
    { id: "03", title: "Reduce Garbage", icon: "🗑️" },
    { id: "04", title: "Recycling Process", icon: "🔄" },
  ];
  const services = [
    {
      id: 1,
      category: "Commercial, Industrial",
      title: "Plastic Recycling Services",
      description:
        "More than 35 million tons of plastics were generated in Rwanda and only 8.7 percent was recycled.",
      image: plastic, 
    },
    {
      id: 2,
      category: "Industrial, Commercial",
      title: "Metal Recycling Services",
      description:
        "Their primary purpose is to ship normal packages in basically the same ways that the postal service does.",
      image: metal,
    },
    {
      id: 3,
      category: "Residential, Industrial",
      title: "Aluminium Recycling Services",
      description:
        "In 2018, 3.9 million tons of aluminum municipal waste was generated. The total recycling rate was 34.9 percent.",
      image: background,
    },
  ];
  

  return (
    <div>
    <div className="pages-container">
        <h2>RECYCLING WASTAGE SAVE ENVIRONMENT!</h2>
      <h1>Simple Steps Wastage<br/>
          to Recycling Item<br/> 
            Processing</h1>
      <p>
        Recycling is the process of converting waste materials into new materials and<br/> objects. 
        To do this, recycling often requires both machinery and employees to<br/> correctly sort 
        recyclable items based on the material they’re made of.

      </p>
     
      <div className="steps-container">
        {steps.map((step) => (
          <div className="step-card" key={step.id}>
            <span className="step-number">{step.id}</span>
            <div className="step-icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>Recycling is the process of making used or unwanted products into new.</p>
          </div>
        ))}
      </div>

    </div>
    <div className="service">
    <h2>REVOLUTION ONGOING DEVELOPMENT</h2>
    <h1>Recenty Recycling Solutions<br/> And Waste Management</h1>
    </div>
    <div className="services-container">
       
      {services.map((service) => (
        <div className="service-card" key={service.id}>
          <img src={service.image} alt={service.title} className="service-image" />
          <div className="service-content">
            <p className="service-category">{service.category}</p>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
    
    </div>
  );
};

export default Pages;
