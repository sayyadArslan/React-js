import React from "react";
import './center.css';
import Table from "../../Components/Table/Table";
const Center = () => 
{
    const tablelist = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    return(
        
        <div className="center">
            {
                tablelist.map((value,key)=>{
                    return <Table tablename={value} key={key}/>
                })
            }         
        </div>
           
           
           
           
        
    )
}
export default Center;