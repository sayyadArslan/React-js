import React from "react";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import Accept from "./AcceptTask";
import FailedTask from './FailedTask';
const Tasklist = () => {
    return (
        <div className="w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <NewTask />
            <CompleteTask />
            <Accept />
            <FailedTask />
        </div>
    )
}
export default Tasklist;