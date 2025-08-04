import React, { useState } from "react";
import "./sidestyle.css"



const Sidebar = () => {
    const [menu, setmenu] = useState('close.png');
    const [icon, seticon] = useState('left.png');

    function setheight(e,f,g) {
        const sidebtn = document.getElementsByClassName('side-btn');
        const arrowimage = document.getElementsByClassName('left-image');
        const extrabutton = document.getElementsByClassName('extra-btn');
        //console.log(extrabutton);
        if (icon == 'left.png') {
            arrowimage[g].style.src = seticon('arrow-down.png');
            sidebtn[e].style.flexDirection = "column";
            sidebtn[e].style.height = "400px";
            extrabutton[g].style.display = "block";
        }
        if (icon == 'arrow-down.png') {
            arrowimage[g].style.src = seticon('left.png');
            sidebtn[e].style.height = "50px";
            extrabutton[g].style.display = "none";
        }

    }





    function makemenu() {
        const sidebar = document.querySelector('.sidebar');
        const sidebtn = document.querySelectorAll('.side-btns');
        const leftbutton = document.querySelectorAll('.left-image');
        const extrabutton = document.querySelectorAll('.extra-btn')
         const softname = document.querySelector('.soft-name')
        // QuerySelectorAll method Pick All element in the form of Array
        //console.log(softname); 
        if (menu == 'menu.png') {
            sidebar.style.width = "220px";
            extrabutton.forEach((box)=>{
                box.style.display = "block";
                
            });
            sidebtn.forEach((box) => {
                box.style.display = "block";
            });
            leftbutton.forEach((box) => {
                box.style.display = "block";

            });
            softname.style.display = "block";
            /*/ sidebtn[0].style.display = "none";
             sidebtn[1].style.display = "none";*/
            setmenu('close.png');
        }
        if (menu == 'close.png') {
            sidebar.style.width = "60px";
            sidebtn.forEach((box) => {
                box.style.display = "none";
            });
            leftbutton.forEach((box) => {
                box.style.display = "none";
            });
             extrabutton.forEach((box)=>{
                box.style.display = "none";
                
            });
            softname.style.display = "none";
            /*sidebtn[0].style.display = "block";
            sidebtn[1].style.display = "block";*/
            setmenu('menu.png');
        }

    }

    return (
        <div className="sidebar">

            <section className="menu-hover">
                <h1 className="soft-name">Restaurent</h1>
                <img onClick={() => { makemenu() }} className="menu" src={menu}></img>
            </section>

            <div className="side-btn">
                <img className="btn-image" src="/Dashboard.png"></img>
                <button className="side-btns">Dashboard</button>
            </div>

            <div onClick={() => { setheight(1,0,0) }} className="side-btn">
                <div className="side-main">
                    <img className="btn-image" src="/order.png"></img>
                    <button className="side-btns">Order</button>
                    <img  className="left-image" src={icon}></img>
                </div>
                <div className="extra-btn">
                    <button>Add Order</button>
                    <button>View Order</button>
                    <button>Order List</button>
                </div>
            </div>

            <div onClick={() => { setheight(2,1,1) }} className="side-btn">
                <div className="side-main">
                    <img className="btn-image" src="/Sale.png"></img>
                    <button className="side-btns">Sale</button>
                    <img  className="left-image" src={icon} ></img>
                </div>
                <div className="extra-btn">
                    <button>View Sale</button>
                </div>



            </div>

            <div onClick={() => { setheight(3,2,2) }} className="side-btn">
                <div className="side-main">
                    <img className="btn-image" src="/product.png"></img>
                    <button className="side-btns">Products</button>
                    <img className="left-image" src={icon}></img>
                </div>
                <div className="extra-btn">
                    <button>New Product</button>
                    <button>View Product</button>
                    <button>Edit Product</button>
                </div>
            </div>

            <div onClick={() => { setheight(4,3,3) }} className="side-btn">
                <div className="side-main">
                    <img className="btn-image" src="/table.png"></img>
                    <button className="side-btns">Table</button>
                    <img  className="left-image" src={icon}></img>
                </div>
                <div className="extra-btn">
                    <button>New Table</button>
                    <button>View Table</button>
                    <button>Edit Table</button>
                </div>

            </div>

            <div onClick={() => { setheight(5,4,4) }} className="side-btn">
                <div className="side-main">
                <img className="btn-image" src="/Report.png"></img>
                <button className="side-btns">Reports</button>
                <img  className="left-image" src={icon}></img>
                </div>
                <div className="extra-btn">
                    <button>Sale Report</button>
                    <button>Purchase Report</button>
                    <button>Order Report</button>
                </div>
            </div>



            <div className="side-btn">
                <img className="btn-image" src="/setting.png"></img>
                <button className="side-btns">Setting</button>
            </div>
        </div>
    )
}
export default Sidebar;