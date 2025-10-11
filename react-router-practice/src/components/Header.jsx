import React from "react";
import { Link, NavLink } from "react-router";

const Header = ()=>{
    return(
        <div>
             <NavLink to='/'>Home</NavLink>
             <NavLink to='/about'>About</NavLink>
             <NavLink to='/contact'>Contact</NavLink>
             <NavLink to='/help'>Help</NavLink>
        </div>
       
    )
}
export default Header;