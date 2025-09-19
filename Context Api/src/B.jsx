import React from "react";
import { useContext } from "react";
import { name } from './App';
const B = ()=>{
    const value = useContext(name);
    return(
        <h2>I am {value}</h2>
    )
}
export default B;