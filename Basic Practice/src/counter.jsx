import React, { useState } from "react";


const button = ()=>
{
    let[count,setcount]= useState(0);

    const counter = ()=>{
         setcount(count+1);
    }
    

    return(
        <button onClick={()=>counter()}>Click Me:::{count}</button>
    )
}
export default button;