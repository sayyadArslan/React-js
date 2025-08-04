import React,{useState} from "react";
import './tableform.css';
const tableform = () => 
{
    return(
        <div className="tableform">
            <div className="tableform-head">
                <h1>Add New Table</h1>
            </div>
            <div className="tableform-datta"> 
                 <form>
                    <input type="text" placeholder="Enter Table No"></input>
                    <button className="btn" type="submit">Add Table</button>
                 </form>  
            </div>
        </div>
       
    )
}
export default tableform;
