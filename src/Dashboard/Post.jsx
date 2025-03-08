import React from "react";
import "./Dashboardstyles/post.css";
import service4 from "../assets/service4.jpg"
import service5 from "../assets/service5.jpg"
const Post= () => {

  const postcard = [
    {
     
      title: "Nam pharetra fringilla justo, et commodo lacus molestie ut",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit […]",
      image: service4,
    },
    {
     
      title: "Fusce vel tellus vulputate, dignissim turpis sit amet, aliquet mi",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit […]",
      image: service5,
    },
  ]
  return (
    <div className="post-card">
      <img src={postcard.image}/>
      <h3>{postcard.title || "Untitled Post"}</h3>
      <p>{postcard.description}</p>
      <div className="post-actions">
        <button>Edit</button>
        <button>Unpublish</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default Post;
