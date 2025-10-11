import React from "react";


const NewTask = () =>{
    return(
         <div className="bg-blue-600/80 p-10 rounded-xl border-l-4 border-blue-400 shadow-md hover:scale-[1.02] transition-transform">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-sm bg-red-400 text-black px-2 py-1 rounded-md font-semibold">High</span>
                    <span className="text-sm text-gray-300">8 Feb 2024</span>
                </div>
                <h3 className="font-semibold text-lg">New UI Design</h3>
                <p className="text-sm text-gray-200">Make new responsive dashboard for team</p>
            </div>
    )
}
export default NewTask;