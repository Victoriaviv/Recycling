import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./components/Home.jsx";
import Service from "./components/Service.jsx";
import Blog from "./components/Blogs.jsx";
import Contact from "./components/Contact.jsx";
import Pages from "./components/Pages.jsx";
import DashboardLayout from "./Dashboard/DashboardLayout.jsx";
// import Sidebar from "./Dashboard/Sidebar.jsx";
import Post from "./Dashboard/Post.jsx";
import Comment from "./Dashboard/Comment.jsx";
import User from "./Dashboard/User.jsx"
// import Dashboardview from "./Dashboard/Dashboardview.jsx"
function App(){
return(
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route path="/" index element={<Home/>}/>
        <Route path="/Service" element={<Service/>}/>
        <Route path="/Blog" element={<Blog/>}/>
        <Route path="/Pages" element={<Pages/>}/>
        <Route path="/Contact" element={<Contact/>}/>

          </Route>
          <Route path="/"element={<DashboardLayout/>}>
          {/* <Route path="/dashboard"index element={<Dashboardview/>}/> */}
          <Route path="/Post"element={<Post/>}/>
          <Route path="/Comment"element={<Comment/>}/>
          <Route path="/User"element={<User/>}/>
         


          </Route>
     </Routes>
  </BrowserRouter>
);

  }

  export default App;