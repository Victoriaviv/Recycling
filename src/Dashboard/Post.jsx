import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Dashboardstyles/post.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineUnpublished } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import blog4 from "../assets/blog4.jpg";
import blog5 from "../assets/blog5.jpg";
import blog3 from "../assets/blog3.jpg";



const Post = ({ isAdmin }) => {
  
  const [showForm, setShowForm] = useState(false);
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({ category: "", title: "", content: "", images: null });

   const token = localStorage.getItem("userToken");
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("https://ecohub-2.onrender.com/blog/getAllblog");

        console.log("API Response:", res.data); 

        if (res.data.success && Array.isArray(res.data.blogs)) {
          setPosts(res.data.blogs);
        } else {
          console.error("Invalid API response: Expected an array");
          setPosts([]); 
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setPosts([]); 
      }
    };

    fetchBlogs();
  }, []);


  const handleChange = (e) => setPost({ ...post, [e.target.name]: e.target.value });


  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setPost({ ...post, images: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!post.title || !post.category || !post.content) {
      alert("Please fill all fields.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("Title", post.title);
      // formData.append("category", post.category);
      formData.append("Description", post.content);
      if (post.images) {
        formData.append("images", post.images);
      }

      const response = await axios.post("https://ecohub-2.onrender.com/blog/createBlog", formData, {
        headers: { "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
         },
      });

      if (response.data.success && response.data.blog) {
        alert("Post Created Successfully!");
        setShowForm(false);
        setPosts([...posts, response.data.blog]);
      } else {
        alert("Failed to create post.");
      }
    } catch (error) {
      console.error("Error creating blog post:", error);
      alert("Failed to create post.");
    }
  };

  
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      try {
        await axios.delete(`https://ecohub-2.onrender.com/blog/deleteBlogById/${id}`);
        setPosts(posts.filter(post => post._id !== id));
        alert("Post deleted successfully!");
      } catch (error) {
        console.error("Error deleting post:", error);
        alert("Failed to delete post.");
      }
    }
  };

 
  const handleUnpublish = async (id) => {
    try {
      await axios.patch(`https://ecohub-2.onrender.com/blog/update/${id}`, { status: "Unpublished" });
      setPosts(posts.map(post => (post._id === id ? { ...post, status: "Unpublished" } : post)));
      alert("Post unpublished.");
    } catch (error) {
      console.error("Error unpublishing post:", error);
      alert("Failed to unpublish post.");
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <div className="dashboard-main">
          {!showForm ? (
            <>
              <h2>Posts Management</h2>
              {/* {isAdmin && ( */}
                <button className="new-post" onClick={() => setShowForm(true)}>
                  + New Post
                </button>
              {/* )} */}

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
                {posts.length > 0 ? (
                  posts.map((post) => (
                    <div key={post._id || post.id} className="post-card">
                      <img src={post.images || "default_image.jpg"} alt="Post" />
                      <span className="status">{post.status || "Published"}</span>
                      <h3>{post.title}</h3>
                      <p>{new Date(post.date).toLocaleString()}</p>
                      <span className="category">{post.category}</span>
                      <div className="actions">
                        <button className="edit"><FaEdit /> Edit</button>
                        <button className="unpublish" onClick={() => handleUnpublish(post._id)}>
                          <MdOutlineUnpublished /> Unpublish
                        </button>
                        <button className="delete" onClick={() => handleDelete(post._id)}>
                          <RiDeleteBin6Line /> Delete
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No posts available.</p>
                )}
              </div>
            </>
          ) : (
            <div className="post-form-container">
              <button className="back-button" onClick={() => setShowForm(false)}>
                <IoMdArrowRoundBack /> Back
              </button>
              <form onSubmit={handleSubmit} className="post-form">
                {/* <label>Category</label>
                <select name="category" onChange={handleChange}>
                  <option value="">Select a category</option>
                  <option value="Community">Community</option>
                  <option value="Education">Education</option>
                </select> */}

                <label>Title</label>
                <input type="text" name="title" onChange={handleChange} />

                <label>Content</label>
                <textarea name="content" rows="4" onChange={handleChange}></textarea>

                <label>Featured Image</label>
                <input type="file" onChange={handleImageUpload} />
                {post.images && (
                  <img
                    src={post.images instanceof File ? URL.createObjectURL(post.images) : post.images}
                    alt="Preview"
                    className="preview-image"
                  />
                )}

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