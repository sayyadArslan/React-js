import React from "react";
import "./sidestyle.css"
import Center from "../center/center";


    
const Sidebar = ()=>{
    return(
        <div className="sidebar">
            <button>Dashboard</button>
            <button onClick={()=>{call()}}>Take Order</button>
            <button>Sale</button>
            <button>Setting</button>
        </div>
    )



}
export default Sidebar;