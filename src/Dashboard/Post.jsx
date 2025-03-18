
import React, { useState } from "react";
import "./Dashboardstyles/post.css";
import blog4 from "../assets/blog4.jpg";
import blog5 from "../assets/blog5.jpg";
import blog3 from "../assets/blog3.jpg";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineUnpublished } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import axios from "axios";
import { useEffect } from "react";
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
  const [showForm, setShowForm] = useState(false);
  const [post, setPost] = useState({
    category: "",
    title: "",
    content: "",
    image: null,
  });

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setPost({ ...post, image: URL.createObjectURL(file) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Post Created!");
    setShowForm(false);
  };
  const[blog,setBlogs]=useState([]);
    useEffect(()=>{

        const getBlogs=async()=>{
            try{
          const res=await axios.get(`http://localhost:5000/blog/getAllblog`);
          setBlogs(res.data)
            }
            catch(error){
                console.log(error);
            }
        }
        getBlogs();
    },[])

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <div className="dashboard-main">
          {!showForm ? (
            <>
              <h2>Posts Management</h2>
              <button className="new-post" onClick={() => setShowForm(true)}>
                + New Post
              </button>
              <div className="filters">
                <select>
                  <option>All Posts</option>
                </select>
                <select>
                  <option>All Categories</option>
                </select>
                <input type="text" placeholder="Search posts..." />
              </div>

              <div className="posts">
                {posts.map((post) => (
                  <div key={post.id} className="post-card">
                    <img src={post.image} alt="Post" />
                    <span className="status">{post.status}</span>
                    <h3>{post.title}</h3>
                    <p>{post.date}</p>
                    <span className="category">{post.category}</span>
                    <div className="actions">
                      <button className="edit"><FaEdit /> Edit</button>
                      <button className="unpublish"><MdOutlineUnpublished /> Unpublish</button>
                      <button className="delete"><RiDeleteBin6Line /> Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="post-form-container">
              <button className="back-button" onClick={() => setShowForm(false)}>
              <IoMdArrowRoundBack /> Create New Post
              </button>
              <form onSubmit={handleSubmit} className="post-form">
                <label>Category</label>
                <select name="category" onChange={handleChange}>
                  <option>Select a category</option>
                  <option value="Community">Community</option>
                  <option value="Education">Education</option>
                </select>

                <label>Title</label>
                <input type="text" name="title" onChange={handleChange} />

                <label>Content</label>
                <textarea name="content" rows="4" onChange={handleChange}></textarea>

                <label>Featured Image</label>
                <input type="file" onChange={handleImageUpload} />
                {post.image && <img src={post.image} alt="Preview" className="preview-image" />}

                <button type="submit" className="submit-button">Create Post</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Post;

