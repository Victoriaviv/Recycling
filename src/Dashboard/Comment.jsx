import React, { useState } from "react";
import "./Dashboardstyles/comment.css"; // Import CSS for styling

const Comment = () => {

  const [comments, setComments] = useState([
    { id: 1, name: "Alice", text: "How can I recycle glass?", date: "2025-03-06", },
    { id: 2, name: "John", text: "Where can I dispose of electronic waste?", date: "2025-03-05" },
    { id: 3, name: "Emily", text: "Recycling plastic is very important!", date: "2025-03-04" },
  ]);

  const handleDelete = (id) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  return (
    <div className="comments-table-container">
      <h2>Comments</h2>
      <table className="comments-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Comment</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((comment) => (
            <tr key={comment.id}>
              <td>{comment.id}</td>
              <td>{comment.name}</td>
              <td>{comment.text}</td>
              <td>{comment.date}</td>
              <td>
                <button className="delete-btn" onClick={() => handleDelete(comment.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Comment;
