import React from "react";
import './Table.css';


const Table = (props)=>{
    return(
        <div className="table">
            <h1>Table No:{props.tablename}</h1>
        </div>   
    )
}
export default Table;