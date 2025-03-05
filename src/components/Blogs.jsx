import React from "react";
import "../styles/blog.css";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg"

const blogs = [
  {
    image: blog1,
    date: "25 Feb",
    title: "What Are The Easiest Materials to Recycle?",
    description: "There are some reasons Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolorem, facilis perferendis ipsam.",
  },
  {
    image:blog2,
    date: "07 Mar",
    title: "Plastic Free July: Who produces the most plastic waste?",
    description: "There are some reasons Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolorem, facilis perferendis ipsam.",
  },
  {
    image: blog3,
    date: "30 Apr",
    title: "Everything you need to know about World Food Safety Day",
    description: "There are some reasons Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolorem, facilis perferendis ipsam.",
  },
];

const Blog = () => {
  return (
    <div className="blog-list">
      {blogs.map((blog, index) => (
        <div key={index} className="blog-card">
          <div
            className="blog-image"
            style={{ backgroundImage: `url(${blog.image})` }}
          >
            <div className="blog-date">{blog.date}</div>
          </div>
          <div className="blog-content">
            <div className="blog-meta">
              <span className="admin-icon">👤 Admin</span>
              <span className="comment-icon">💬 </span>
            </div>
            <h3 className="blog-title">{blog.title}</h3>
            <p className="blog-description">{blog.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
