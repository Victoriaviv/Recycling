import React from "react";

import "./Dashboardstyles/post.css";
import blog4 from "../assets/blog4.jpg";
import blog5 from "../assets/blog5.jpg";
import blog3 from "../assets/blog3.jpg";


const posts = [
  {
    id: 1,
    title: "Eco-Friendly Waste Disposal Tips",
    date: "Dec 14, 2024, 5:25:16 PM",
    category: "Recycling Awareness",
    image: blog5,
    status: "Published",
  },
  {
    id: 2,
    title: "Training Students on Waste Management",
    date: "Dec 14, 2024, 5:34:58 PM",
    category: "Education & Training",
    image: blog4,
    status: "Published",
  },
  {
    id: 3,
    title: "Sustainable Living & Recycling Programs",
    date: "Feb 9, 2025, 7:04:46 PM",
    category: "Sustainability",
    image: blog3,
    status: "Published",
  },
];

const Post = () => {

  // const [showForm, setShowForm] = useState(false);
  return (
    <div className="dashboard-container">
  
      <div className="dashboard-content">
      
        <div className="dashboard-main">
          <h2>Posts Management</h2>
          {!showForm ? (
            <>
          <button className="new-post"onClick={() => setShowForm(true)}>+ New Post</button>
          <div className="filters">
            <select>
              <option>All Posts</option>
            </select>
            <select>
              <option>All Categories</option>
            </select>
            <input type="text" placeholder="Search posts..." />
         
          </div>
          </>
          ):(
            <PostForm onClose={() => setShowForm(false)} />
          )}
          <div className="posts">
            {posts.map((post) => (
              <div key={post.id} className="post-card">
                <img src={post.image} alt="Post" />
                <span className="status">{post.status}</span>
                <h3>{post.title}</h3>
                <p>{post.date}</p>
                <span className="category">{post.category}</span>
                <div className="actions">
                  <button className="edit">Edit</button>
                  <button className="unpublish">Unpublish</button>
                  <button className="delete">Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
