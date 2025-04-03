import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Dashboardstyles/comment.css";

const CommentDashboard = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const fetchComments = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/comment/getAllComments");
      setComments(response.data.comments);
      console.log("📩 Fetched comments:", response.data.comments);
    } catch (err) {
      setError("Failed to fetch comments");
    } finally {
      setLoading(false);
    }
  };


  const handleDelete = async (commentId) => {
    try {
      await axios.delete(`http://localhost:5000/comment/deleteComment/${commentId}`);
      setComments(comments.filter((comment) => comment._id !== commentId));
    } catch (err) {
      console.error("❌ Failed to delete comment");
    }
  };

  
  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div className="comments-section">
      <h2>Comment Dashboard</h2>

      {loading ? (
        <p>Loading comments...</p>
      ) : error ? (
        <p>{error}</p>
      ) : comments.length === 0 ? (
        <p>No comments available.</p>
      ) : (
        <table className="comment-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Comment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {comments.map((comment) => (
              <tr key={comment._id}>
                <td>{comment.name || "Anonymous"}</td>
                <td>{comment.email || "N/A"}</td>
                <td>{comment.text}</td>
                <td>
                  <button onClick={() => handleDelete(comment._id)} className="delete-btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CommentDashboard;
