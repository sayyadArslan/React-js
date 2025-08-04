import React from "react";
import './dashboard.css';
import Linechart from '../charts/Linechart/linechart';

const dashboard = ()=>
{
    return(
        <div className="dashboard">
            <div className="user-info">
                <div className="user-name">
                    <h1>WellCome Back,Arslan!</h1>
                    <p>What Will you toay</p>
                </div>
                <div className="user-det">
                    <input type="text" placeholder="Search"></input>
                    <div>
                        <img src="user.png"></img>
                    </div>
                </div>
            </div>
            <div className="pop">
                    <h1>WelllCome Arslan</h1>
                    <img src="close.png"></img>
            </div>
            
                 <Linechart/>
          
        </div>
    )
}
export default dashboard;