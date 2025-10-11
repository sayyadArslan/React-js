import React from "react";


const Header = ({data}) => {
    return (
        <header className="w-full  flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
             <h2 className="text-2xl text-white font-semibold">Hello, <span className="text-yellow-300">{data.firstName} </span></h2>
            <button className="bg-red-500 hover:bg-red-400 px-5 py-2 rounded-lg font-medium transition w-full sm:w-auto">LogOut</button>
        </header>
    )
}
export default Header;