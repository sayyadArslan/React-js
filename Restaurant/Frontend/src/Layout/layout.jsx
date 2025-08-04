import React from "react";
import './layout.css';
import  {Outlet} from "react-router-dom";
import SideBar from '../Components/Sidebar/Sidebar';
import Dashboard from '../Components/Dashboard/dashboard'
import Table from "../Components/Table/Table";
import Tableform from '../Components/Table-Form/tableform';
import Addproduct from '../Components/Product/addproduct';
const Layout = () => {
    return (
        <div className="layout">
            <SideBar />
            <div className="content">
                <Addproduct/>
            </div>
          
           {/*
            <Outlet/>*/
           } 
        </div>
    )
}
export default Layout;