import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/blog.css";
import { FaRegCommentDots } from "react-icons/fa6";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";
import blog4 from "../assets/blog4.jpg";
import blog5 from "../assets/blog5.jpg";
import blog6 from "../assets/blog6.jpg";

const blogs = [
  { id: "67d956191ab9af9c3c670230", image: blog1, Date: "25 Feb", title: "What Are The Easiest Materials to Recycle?", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: "67d956191ab9af9c3c670231", image: blog2, Date: "07 Mar", title: "Plastic Free July: Who produces the most plastic waste?", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: "67d956191ab9af9c3c670232", image: blog3, Date: "30 Apr", title: "Everything you need to know about World Food Safety Day", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: "67d956191ab9af9c3c670233", image: blog4, Date: "25 Feb", title: "Survey Says that Being Green Makes us Happier", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: "67d956191ab9af9c3c670234", image: blog5, Date: "07 Mar", title: "Sainsbury’s Announces New In-Store Plastic Recycling Scheme", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: "67d956191ab9af9c3c670235", image: blog6, Date: "30 Apr", title: "Government figures show declining recycling rates in Rwanda", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
];

const Blog = () => {
  const [comments, setComments] = useState({});
  const [activeCommentBox, setActiveCommentBox] = useState(null);
  const [newComments, setNewComments] = useState({});

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const updatedComments = {};
        for (const blog of blogs) {
          const response = await axios.get(`https://ecohub-2.onrender.com/comment/getCommentsByBlogId/${blog.id}`);
          updatedComments[blog.id] = response.data.comments.map(c => c.text);
        }
        setComments(updatedComments);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };
    fetchComments();
  }, []);

  const handleCommentClick = (blogId) => {
    setActiveCommentBox(blogId === activeCommentBox ? null : blogId);
  };

  const handleAddComment = async (blogId) => {
    // Check if comment is empty
    if (!newComments[blogId] || newComments[blogId].trim() === "") {
      alert("Please write a comment before posting.");
      return;
    }

    try {
      // Post new comment to backend
      const response = await axios.post("https://ecohub-2.onrender.com/comment/createComment", {
        blogId,
        text: newComments[blogId],
      });

      if (response.data.success) {
        // Fetch updated comments
        const res = await axios.get(`https://ecohub-2.onrender.com/comment/getCommentsByBlogId/${blogId}`);
        setComments(prevComments => ({
          ...prevComments,
          [blogId]: res.data.comments.map(c => c.text),
        }));
      }

      // Clear the input field after posting
      setNewComments(prev => ({ ...prev, [blogId]: "" }));
    } catch (error) {
      console.error("Error posting comment:", error);
      alert("An error occurred while posting the comment.");
    }
  };

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
            <div className="blog-image" style={{ backgroundImage: `url(${blog.image})` }}>
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

              {activeCommentBox === blog.id && (
                <div className="comment-section">
                  <input
                    type="text"
                    className="comment-input"
                    placeholder="Write a comment..."
                    value={newComments[blog.id] || ""}
                    onChange={(e) => setNewComments({ ...newComments, [blog.id]: e.target.value })}
                  />
                  <button onClick={() => handleAddComment(blog.id)}>Post</button>

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
