import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";



function DashboardLayout () {

    return(
<div>
<Sidebar/>
<Outlet/>

</div>
    )
}
export default  DashboardLayout;