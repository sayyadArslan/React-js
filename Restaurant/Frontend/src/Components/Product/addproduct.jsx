import React,{useState} from "react";
import './addproduct.css';
const product = () => 
{
    return(
        <div className="tableform">
            <div className="tableform-head">
                <h1>Add New Product</h1>
            </div>
            <div className="tableform-datta"> 
                 <form>
                    <input type="text" placeholder="Enter Product No"></input>
                    <input type="text" placeholder="Enter Product Name"></input>
                    <input type="text" placeholder="Enter Product Description"></input>
                    <input type="text" placeholder="Enter Product Price"></input>
                    <input type="file" placeholder="Uplaod Image"></input>
                    <button className="btn" type="submit">Add Product</button>
                 </form>  
                
            </div>
        </div>
       
    )
}
export default product;
