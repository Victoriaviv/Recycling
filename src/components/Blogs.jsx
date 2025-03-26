import React, { useState, useEffect, useCallback } from "react";
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
  { id: "67d956191ab9af9c3c670230", image: blog1, date: "25 Feb", title: "What Are The Easiest Materials to Recycle?", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: "67d956191ab9af9c3c670231", image: blog2, date: "07 Mar", title: "Plastic Free July: Who produces the most plastic waste?", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: "67d956191ab9af9c3c670232", image: blog3, date: "30 Apr", title: "Everything you need to know about World Food Safety Day", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: "67d956191ab9af9c3c670233", image: blog4, date: "25 Feb", title: "Survey Says that Being Green Makes us Happier", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: "67d956191ab9af9c3c670234", image: blog5, date: "07 Mar", title: "Sainsbury’s Announces New In-Store Plastic Recycling Scheme", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: "67d956191ab9af9c3c670235", image: blog6, date: "30 Apr", title: "Government figures show declining recycling rates in Rwanda", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
];
const Blog = () => {
  const [comments, setComments] = useState({});
  const [activeCommentBox, setActiveCommentBox] = useState(null);
  const [newComments, setNewComments] = useState({});
  const [loading, setLoading] = useState({});
  const [error, setError] = useState({});

  const fetchComments = useCallback(async (blogId) => {
    setLoading((prev) => ({ ...prev, [blogId]: true }));
    setError((prev) => ({ ...prev, [blogId]: null }));

    try {
      const response = await axios.get(`https://ecohub-2.onrender.com/comment/getCommentsByBlogId/${blogId}`);
      setComments((prev) => ({
        ...prev,
        [blogId]: response.data.comments.map((c) => c.text),
      }));
    } catch (err) {
      setError((prev) => ({
        ...prev,
        [blogId]: "Failed to load comments",
      }));
    } finally {
      setLoading((prev) => ({ ...prev, [blogId]: false }));
    }
  }, []);

  const handleCommentClick = (blogId) => {
    if (activeCommentBox !== blogId) {
      setActiveCommentBox(blogId);
      fetchComments(blogId);
    } else {
      setActiveCommentBox(null);
    }
  };

  const handleAddComment = async (blogId) => {
    if (!newComments[blogId] || newComments[blogId].trim() === "") {
      alert("Please write a comment before posting.");
      return;
    }

    const newComment = newComments[blogId].trim();

    // Update state immediately with the new comment
    setComments((prev) => ({
      ...prev,
      [blogId]: [...(prev[blogId] || []), newComment],  // Add the new comment to the current list
    }));

    try {
      // Post the new comment to the backend
      await axios.post("https://ecohub-2.onrender.com/comment/createComment", {
        blogId,
        text: newComment,
        userId: "defaultUserId",  // Replace with actual user ID
        name: "defaultName",      // Replace with actual user name
        email: "defaultEmail@example.com", // Replace with actual email
      });

      // Clear the input field after posting
      setNewComments((prev) => ({ ...prev, [blogId]: "" }));

      // Optionally, fetch updated comments after posting, to ensure consistency
      fetchComments(blogId);
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
              <div className="blog-date">{blog.date}</div>
            </div>

            <div className="blog-content">
              <div className="blog-meta">
                <button 
                  className="comment-btn" 
                  onClick={() => handleCommentClick(blog.id)} 
                  aria-label="Toggle comments"
                >
                  <FaRegCommentDots className="blo" /> Comments
                </button>
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

                  {loading[blog.id] && <p className="loading-text">Loading comments...</p>}
                  {error[blog.id] && <p className="error-text">{error[blog.id]}</p>}

                  <div className="comments-list">
                    {/* Show comments if they exist */}
                    {comments[blog.id]?.length > 0 ? (
                      comments[blog.id].map((comment, index) => (
                        <p key={index} className="comment">{comment}</p>
                      ))
                    ) : (
                      <p className="no-comments-text"></p>  
                    )}
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
