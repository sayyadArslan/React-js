import React from "react";
import './Table.css';


const Table = (props)=>{
    return(
        <div className="table-component">
            <div className="table-heading">
                <h1>Book Table,Confirm Table</h1>
            </div>
            <div className="tables">
                <div className="table">
                <h1>Table No:</h1>
                <h2>Time</h2>
                <button>Add Table</button>
                </div>
                
            </div>       
        </div>
        
    )
}
export default Table;