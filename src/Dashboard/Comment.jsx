import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Dashboardstyles/comment.css";

const Comment = ({ blogId }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const fetchComments = async () => {
    if (!blogId) return;
    try {
      const response = await axios.get(`http://localhost:5000/comment/getCommentsByBlogId/${blogId}`);
      setComments(response.data.comments);
    } catch (err) {
      setError("Failed to fetch comments");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [blogId]);


  const handleDelete = async (commentId) => {
    try {
      await axios.delete(`http://localhost:5000/comment/deleteComment/${commentId}`);
      setComments(comments.filter((c) => c._id !== commentId));
    } catch (err) {
      console.error("Failed to delete comment");
    }
  };

  return (
    <div className="comments-section">
      <h2>Comments</h2>
      {loading ? <p>Loading...</p> : 
        comments.length === 0 ? <p>No comments available.</p> : 
        comments.map((comment) => (
          <div key={comment._id} className="comment">
            <p><strong>{comment.name || "Anonymous"}:</strong> {comment.text}</p>
            <button onClick={() => handleDelete(comment._id)}>Delete</button>
          </div>
        ))
      }
    </div>
  );
};

export default Comment;
