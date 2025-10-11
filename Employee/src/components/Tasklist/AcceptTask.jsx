import React from "react";


const Accept = () => {
    return (
        <div className="bg-orange-400 p-10 rounded-xl border-l-4 border-red-400 shadow-md hover:scale-[1.02] transition-transform">
            <div className="flex justify-between items-center mb-2">
                <span className="text-sm bg-red-400 text-black px-2 py-1 rounded-md font-semibold">High</span>
                <span className="text-sm text-gray-300">20 Feb 2024</span>
            </div>
            <h3 className="font-semibold text-lg">Ek aur task</h3>
            <p className="text-sm text-gray-200">Task jaisa kabhi nahi dekha hoga waisa</p>
        </div>
    )
}
export default Accept;