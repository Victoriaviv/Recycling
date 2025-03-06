import React from "react";
import "../styles/blog.css";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";
import blog4 from "../assets/blog4.jpg";
import blog5 from "../assets/blog5.jpg";
import blog6 from "../assets/blog6.jpg";
import { LuCircleUserRound } from "react-icons/lu";
import { FaRegCommentDots } from "react-icons/fa6";

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
  {
    image: blog4,
    date: "25 Feb",
    title: "Survey Says that Being Green Makes us Happier",
    description: "There are some reasons Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolorem, facilis perferendis ipsam.",
  },
  {
    image:blog5,
    date: "07 Mar",
    title: "Sainsbury’s Announces New In-Store Plastic Recycling Scheme",
    description: "There are some reasons Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolorem, facilis perferendis ipsam.",
  },
  {
    image: blog6,
    date: "30 Apr",
    title: "Government figures show declining recycling rates in the Rwanda",
    description: "There are some reasons Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolorem, facilis perferendis ipsam.",
  },
];

const Blog = () => {
  return (
    <div>
       <div className="blog-header">
      <div className="blog-overlay">
        <h1 className="blogtitle">Blog - Standard</h1>
      
      </div>
    </div>
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
              <span className="admin-icon"><LuCircleUserRound className="blo" />Admin</span>
              <span className="comment-icon"><FaRegCommentDots className="blo"/> </span>
            </div>
            <h3 className="blog-title">{blog.title}</h3>
            <p className="blog-description">{blog.description}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Blog;
