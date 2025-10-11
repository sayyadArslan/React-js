import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router";

const Layout = ()=>{
    return(
        <>
            <Header/>
            <Outlet/> 
        </>
    )
}
export default Layout;
//outlet is a placeholder where component renders
// it is used in react-router-dom for nested routing