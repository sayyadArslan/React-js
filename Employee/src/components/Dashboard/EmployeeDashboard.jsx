import React from "react";
import Header from "../other/Header";
import Tasklist from "../Tasklist/Tasklist";
export default function EmployeeDashboard({data}) {
  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col items-center p-6 lg:p-10">
     
        <Header data={data}/>
      <div className="w-full  grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        <div className="bg-blue-500 p-5 rounded-xl text-center shadow-lg">
          <h3 className="text-4xl font-bold">{data.taskSummary.newTask}</h3>
          <p className="text-base font-medium">New Task</p>
        </div>
        <div className="bg-green-500 p-5 rounded-xl text-center shadow-lg">
          <h3 className="text-4xl font-bold">{data.taskSummary.completed}</h3>
          <p className="text-base font-medium">Completed</p>
        </div>
        <div className="bg-yellow-400/80 p-5 rounded-xl text-center shadow-lg">
          <h3 className="text-4xl font-bold">{data.taskSummary.accepted}</h3>
          <p className="text-base font-medium">Accepted</p>
        </div>
        <div className="bg-red-600/80 p-5 rounded-xl text-center shadow-lg">
          <h3 className="text-4xl font-bold">{data.taskSummary.failed}</h3>
          <p className="text-base font-medium">Failed</p>
        </div>
      </div>
      <Tasklist/>
   
     
    </div>
  );
}
