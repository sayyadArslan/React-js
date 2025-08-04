import React, { useState } from "react";
import '../Login/login.css';
const Signup = () => {
    
    const [image, setimage] = useState('visibilty-off.png');
    const changeimage = () => {

        if (image == "visibilty-off.png") {
            setimage('visible.png');
        }
        else {
            setimage('visibilty-off.png');
        }
    }



    return (

        <div className="loginscreen">
            <div className="Login">
                <h1>WellCome,Create Account</h1>
                <form>
                    <input type="email" placeholder="Enter Email"></input>
                    <input type="text" placeholder="Enter Username"></input>
                    <div>
                       
                       <input type="password" placeholder="Enter Password"></input>
                        <img onClick={() => {
                            changeimage()
                        }} src={image}></img>
                    </div>
                    

                    <button className="btn" type="submit">Create</button>
                </form>
                <a href="">Already Registered</a>
            </div>
        </div>

    )
}
export default Signup;
