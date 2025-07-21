import React from "react";
import Login from "./Components/Auth/Login/Login";
import Signup from "./Components/Auth/Signup/Signup";
import Sidebar from "./Dashboard/Sidebar/Sidebar";
import Center from "./Dashboard/center/center";
import './App.css';
const App = ()=>
{
  return(
      <div className="app">
          <Sidebar />
        {  /* <Center />*/}
      </div>
  )
}
export default App;