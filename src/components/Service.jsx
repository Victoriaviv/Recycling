import React from "react";
import "../styles/service.css";
import service1 from  "../assets/service1.jpg";
import service2 from  "../assets/service2.jpg";
import service3 from  "../assets/service3.jpg";
import service4 from  "../assets/service4.jpg";
import service5 from  "../assets/service5.jpg";
import service6 from  "../assets/service6.jpg"

const recyclingCategories = [
  {
    id: 1,
    title: "Cupboard/Paper Recycling",
    description: "Paper recycling helps reduce deforestation and waste by transforming used paper into new products. This process conserves natural resources, saves energy, and minimizes landfill waste, making it an essential part of sustainable environmental practices.",
    image: service1,
     link: "#"

  },
  {
    id: 2,
    title: "Plastic Recycling",
    description: "Recycling plastic helps prevent waste accumulation and ocean pollution while conserving non-renewable fossil fuels. It plays a crucial role in creating a cleaner and healthier environment.",
    image: service2,
    link: "#"
  },
  {
    id: 3,
    title: "Glass Recycling",
    description: "Glass recycling conserves raw materials and reduces energy consumption by melting used glass to create new products. Since glass can be recycled indefinitely, it plays a key role in sustainable waste management.",
    image: service3,
     link: "#"
   
  },
  {
    id: 1,
    title: "Aluminium Recycling",
    description: "Recycling aluminum saves 95% of the energy needed to produce new aluminum from raw materials. It helps reduce mining, conserves natural resources, and prevents aluminum waste from ending up in landfills.",
    image: service4,
     link: "#"

  },
  {
    id: 2,
    title: "Electrical Recycling",
    description: "Electrical recycling ensures that valuable materials from old electronic devices are recovered and reused. This process prevents hazardous e-waste from polluting the environment and conserves rare metals",
    image: service5,
    link: "#"
  },
  {
    id: 3,
    title: "Metal Recycling",
    description: "Metal recycling reduces the need for mining and lowers greenhouse gas emissions. Recycled metals such as steel and copper can be used in construction, manufacturing, and various industries, promoting sustainability.",
    image: service6,
     link: "#"
   
  }
];

const Service = () => {
  return (
<div >
<div className="service-header">
      <div className="service-overlay">
        <h1 className="servicetitle"> Services</h1>
      </div>
      </div>
    <div className="recycling-container">
      {recyclingCategories.map((category) => (
        <div key={category.id} className="recycling-card">
          <img src={category.image} alt={category.title} className="category-image" />
          <div className="card-content">
          
            <h3 className="category-title">{category.title}</h3>
            <p className="category-description">{category.description}</p>
            <a href={category.link} className="read-more">Read More</a>
          </div>
        </div>
      ))}
    </div>
    </div>
    
  );
};

export default Service;
