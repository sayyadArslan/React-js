import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from '../other/AllTask';
export default function CreateTaskForm() {
  return (
    <>
    
      <div className="flex flex-col items-center flex-wrap bg-black  p-6">
        <Header/>
        <CreateTask/>
        <div className="flex flex-wrap m-5 gap-2 text-white ">
            <AllTask/>
            <AllTask/>
            <AllTask/>
            <AllTask/>
            <AllTask/>
        </div>
     </div>  
    </>
    
    
  );
}