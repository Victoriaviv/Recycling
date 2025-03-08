import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import DashboardNavbar from "./DashboardNavbar";



function DashboardLayout () {

    return(
<div>
    
<Sidebar/>
<DashboardNavbar/>
<Outlet/>

</div>
    )
}
export default  DashboardLayout;