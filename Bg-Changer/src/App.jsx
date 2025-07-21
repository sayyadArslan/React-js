import React,{useState} from "react";
import './app.css'
import Button from "./Button";
const App = (props)=>{

 const[color,setcolor]=useState('olive');
    return(

     
      <div className="main" style={{backgroundColor:color}}>
        <button onClick={()=>setcolor('red')}>Red</button>
        <button onClick={()=>{setcolor('black')}}>Black</button>
        <button onClick={()=>{setcolor('orange')}}>Orange</button>
      </div>
    )

}
export default  App;