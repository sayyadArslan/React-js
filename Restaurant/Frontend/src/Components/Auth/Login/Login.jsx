import React,{useState} from "react";
import './login.css';
const Login = () => 
{

        const [image, setimage] = useState('visibilty-off.png');
        const changeimage = () => {
    
            if (image == "visibilty-off.png") {
                setimage('visible.png');
            }
            else {
                setimage('visibilty-off.png');
            }
        }


    return(
        <div className="loginscreen">
            <div className="Login">
                 <h1>WellCome,Login Now</h1> 
                 <form>
                    <input type="text" placeholder="Enter Username"></input>
                   <div> 
                    <input type="password" placeholder="Enter Password"></input>
                        <img onClick={() => {
                            changeimage()
                        }} src={image}></img>
                    </div>
                    
                    <button className="btn" type="submit">Login Now</button>
                 </form>  
                 <a href="">Create New Account</a>
            </div>
        </div>
       
    )
}
export default Login;
