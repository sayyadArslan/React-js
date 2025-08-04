import React from "react";
import './Order.css';

const Order = ()=>
{
    return(
        <>
            <div className="order">
                <div className="product-list">
                    <div className="search-Product">
                        <form>
                            <input className="" placeholder="Search Products"></input>
                            <button>Search</button>
                        </form>
                    </div>
                    <div className="items"> 
                    <div className="item">
                        <img src="/images.jpeg"></img>
                        <div>
                            <h5>Product Name</h5>
                            <h5>Product Price</h5>
                        </div>
                        
                        <button>Add to Cart</button>
                    </div>
                    <div className="item">
                        <img src="/images.jpeg"></img>
                        <div>
                            <h5>Product Name</h5>
                            <h5>Product Price</h5>
                        </div>
                        
                        <button>Add to Cart</button>
                    </div>
                    <div className="item">
                        <img src="/images.jpeg"></img>
                        <div>
                            <h5>Product Name</h5>
                            <h5>Product Price</h5>
                        </div>
                        
                        <button>Add to Cart</button>
                    </div>
                    <div className="item">
                        <img src="/images.jpeg"></img>
                        <div>
                            <h5>Product Name</h5>
                            <h5>Product Price</h5>
                        </div>
                        
                        <button>Add to Cart</button>
                    </div>
                    </div>
                </div>
                <div className="cart">
                    <div className="cart-details">
                        <div className="">
                            <h3>Table No:</h3>
                            <h3>Order Invoice</h3>
                        </div>
                    </div> 
                    <div className="cart-items">
                        <div className="cart-item">
                            <img src="/images.jpeg"></img>
                            <div className="cart-det">
                                <div>
                                    <h3>Product</h3>
                                    <h3>Product Name</h3>
                                </div>  
                                 <div>
                                    <h3>Qty</h3>
                                    <h3>1</h3>
                                </div>    
                            </div>
                            <div className="del-item">
                                <img className="" src="/bclose.png"></img>    
                            </div>
                            
                        </div>
                         <div className="cart-item">
                            <img src="/images.jpeg"></img>
                            <div className="cart-det">
                                <div>
                                    <h3>Product</h3>
                                    <h3>Product Name</h3>
                                </div>  
                                 <div>
                                    <h3>Qty</h3>
                                    <h3>1</h3>
                                </div>    
                            </div>
                            <div className="del-item">
                                <img className="" src="/bclose.png"></img>    
                            </div>
                            
                        </div>
                         <div className="cart-item">
                            <img src="/images.jpeg"></img>
                            <div className="cart-det">
                                <div>
                                    <h3>Product</h3>
                                    <h3>Product Name</h3>
                                </div>  
                                 <div>
                                    <h3>Qty</h3>
                                    <h3>1</h3>
                                </div>    
                            </div>
                            <div className="del-item">
                                <img className="" src="/bclose.png"></img>    
                            </div>
                            
                        </div>
                         <div className="cart-item">
                            <img src="/images.jpeg"></img>
                            <div className="cart-det">
                                <div>
                                    <h3>Product</h3>
                                    <h3>Product Name</h3>
                                </div>  
                                 <div>
                                    <h3>Qty</h3>
                                    <h3>1</h3>
                                </div>    
                            </div>
                            <div className="del-item">
                                <img className="" src="/bclose.png"></img>    
                            </div>
                            
                        </div>
                         <div className="cart-item">
                            <img src="/images.jpeg"></img>
                            <div className="cart-det">
                                <div>
                                    <h3>Product</h3>
                                    <h3>Product Name</h3>
                                </div>  
                                 <div>
                                    <h3>Qty</h3>
                                    <h3>1</h3>
                                </div>    
                            </div>
                            <div className="del-item">
                                <img className="" src="/bclose.png"></img>    
                            </div>
                            
                        </div>
                    </div>   
                        <button className="print-kit">Print Bill(Kitchen)</button>
                </div>
            </div>
        </>
    )
}
export default Order;