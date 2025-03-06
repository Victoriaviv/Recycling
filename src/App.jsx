import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./components/Home.jsx";
import Service from "./components/Service.jsx";
import Blog from "./components/Blogs.jsx";
import Contact from "./components/Contact.jsx";
import Pages from "./components/Pages.jsx"
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
     </Routes>
  </BrowserRouter>
);

  }

  export default App;