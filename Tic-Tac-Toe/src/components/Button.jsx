import React, { useState } from "react";
import '../App.css';

const Button = () => {

    const [value, setvalue] = useState('X')
    function changevalue()
    {
        if(value=='X')
        {
            setvalue('O')
        }
         if(value=='O')
        {
            setvalue('X')
        }
    }
    function addvalue()
    {
        const btns = document.querySelectorAll('.btn');
        btns.forEach((box)=>{
            box.insertAdjacentText = value;
        })
        console.log(btns);
    }

    return (
        <>
            <button className="btn"  value={value} onClick={()=>{changevalue(),addvalue()}}>1</button>
            <button className="btn" onClick={()=>{changevalue()}}></button>
            <button className="btn" onClick={()=>{changevalue()}}></button>
            <button className="btn" onClick={()=>{changevalue()}}></button>
            <button className="btn" onClick={()=>{changevalue()}}></button>
            <button className="btn" onClick={()=>{changevalue()}}></button>
            <button className="btn" onClick={()=>{changevalue()}}></button>
            <button className="btn" onClick={()=>{changevalue()}}></button>
            <button className="btn" onClick={()=>{changevalue()}}></button>
        </>


    )
}
export default Button;