import React from "react";
import { Link, NavLink } from "react-router";
import './header.css'
const Header  = ()=>{
    return(
        <div className="header">
            <div className="logo">
                <h1>React Router</h1>
            </div>
            <div className="menu">
                <NavLink className="nav" to="/">Home</NavLink>
                <NavLink className="nav" to="/about">About</NavLink>
                <NavLink className="nav" to="/contact">Contact</NavLink>
                <NavLink className="nav" to="/help">Help</NavLink>
            </div>
        </div>
    )
}
export default Header;