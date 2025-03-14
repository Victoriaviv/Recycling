
import React, { useState } from "react";
import "../styles/blog.css";
import blog1 from "../assets/blog1.jpg";
import axios from "axios";
import { useEffect } from "react";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";
import blog4 from "../assets/blog4.jpg";
import blog5 from "../assets/blog5.jpg";
import blog6 from "../assets/blog6.jpg";
import { LuCircleUserRound } from "react-icons/lu";
import { FaRegCommentDots } from "react-icons/fa6";

const blogs = [
  {
    id: 1,
    image: blog1,
    Date: "25 Feb",
    title: "What Are The Easiest Materials to Recycle?",
    description: "There are some reasons Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    image: blog2,
    Date: "07 Mar",
    title: "Plastic Free July: Who produces the most plastic waste?",
    description: "There are some reasons Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    image: blog3,
    Date: "30 Apr",
    title: "Everything you need to know about World Food Safety Day",
    description: "There are some reasons Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 4,
    image: blog4,
    Date: "25 Feb",
    title: "Survey Says that Being Green Makes us Happier",
    description: "There are some reasons Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 5,
    image: blog5,
    Date: "07 Mar",
    title: "Sainsbury’s Announces New In-Store Plastic Recycling Scheme",
    description: "There are some reasons Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 6,
    image: blog6,
    Date: "30 Apr",
    title: "Government figures show declining recycling rates in Rwanda",
    description: "There are some reasons Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Blog = () => {
  const [comments, setComments] = useState({});
  const [activeCommentBox, setActiveCommentBox] = useState(null);
  const [newComment, setNewComment] = useState("");

  // Handle opening comment box
  const handleCommentClick = (blogId) => {
    setActiveCommentBox(blogId === activeCommentBox ? null : blogId);
  };

  // Handle adding a comment
  const handleAddComment = (blogId) => {
    if (newComment.trim() === "") return;
    setComments({
      ...comments,
      [blogId]: [...(comments[blogId] || []), newComment],
    });
    setNewComment("");
  };
  const[blog,setBlogs]=useState([]);
    useEffect(()=>{

        const getBlogs=async()=>{
            try{
const res=await axios.get(`http://localhost:8080/blog/getAllblog`);
setBlogs(res.data)
            }
            catch(error){
                console.log(error);
            }
        }
        getBlogs();
    },[])

  return (
    <div>
      <div className="blog-header">
        <div className="blog-overlay">
          <h1 className="blogtitle">Blog - Standard</h1>
        </div>
      </div>

      <div className="blog-list">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <div
              className="blog-image"
              style={{ backgroundImage: `url(${blog.image})` }}
            >
              <div className="blog-date">{blog.Date}</div>
            </div>

            <div className="blog-content">
              <div className="blog-meta">
               
                <span className="comment-icon" onClick={() => handleCommentClick(blog.id)}>
                  <FaRegCommentDots className="blo" /> Comment
                </span>
              </div>

              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>

              {/* Comment Section */}
              {activeCommentBox === blog.id && (
                <div className="comment-section">
                  <input
                    type="text"
                    className="comment-input"
                    placeholder="Write a comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                  />
                  <button onClick={() => handleAddComment(blog.id)}>Post</button>

                  {/* Display Comments */}
                  <div className="comments-list">
                    {comments[blog.id]?.map((comment, index) => (
                      <p key={index} className="comment">{comment}</p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default Blog;

