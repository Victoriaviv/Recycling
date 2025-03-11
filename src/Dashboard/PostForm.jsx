// import React  from "react";
// import { useState } from "react";
// import "./Dashboardstyles/PostForm.css";

// const PostForm = ({ onClose }) => {
//   const [post, setPost] = useState({
//     category: "",
//     title: "",
//     content: "",
//     image: null,
//   });

//   const handleChange = (e) => {
//     setPost({ ...post, [e.target.name]: e.target.value });
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     setPost({ ...post, image: URL.createObjectURL(file) });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Post Created!");
//     onClose();
//   };

//   return (
//     <div className="post-form-container">
//       <button className="back-button" onClick={onClose}>← Create New Post</button>
//       <form onSubmit={handleSubmit} className="post-form">
//         <label>Category</label>
//         <select name="category" onChange={handleChange}>
//           <option>Select a category</option>
//           <option value="Community">Community</option>
//           <option value="Education">Education</option>
//         </select>

//         <label>Title</label>
//         <input type="text" name="title" onChange={handleChange} />

//         <label>Content</label>
//         <textarea name="content" rows="4" onChange={handleChange}></textarea>

//         <label>Featured Image</label>
//         <input type="file" onChange={handleImageUpload} />
//         {post.image && <img src={post.image} alt="Preview" className="preview-image" />}

//         <button type="submit" className="submit-button">Create Post</button>
//       </form>
//     </div>
//   );
// };

// export default PostForm;
