import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./components/Home.jsx"
function App(){
return(
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route path="/" index element={<Home/>}/>
          </Route>
     </Routes>
  </BrowserRouter>
);

  }

  export default App;