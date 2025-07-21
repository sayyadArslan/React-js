import React, { useState } from "react";
import './App.css'
const button = (props)=>{
    
    
    return(

             <button onClick={()=>setcolor(props.value)}>{props.name}</button>
            
    )
}
export default button;