import React, { useContext, useEffect, useState } from "react";
import Login from './components/Auth/Login';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import { getLocalStorage,setLocalStorage } from "./Utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const [user,setuser] = useState(null);
  const Authdata = useContext(AuthContext);
  const [loggedInUserdata,setloggedInUserdata] = useState(null)
  //console.log(Authdata);
 //console.log(user);
 
 
  useEffect(()=>{
      const loggedInUser = localStorage.getItem("loggedInUser");
      if(loggedInUser)
      {
        setuser(loggedInUser.role);
      }
  },[Authdata]); 

  

  
  const handlelogin = (email,password) =>{
      if(email == 'arslan@gmail.com' && password == '1234')
      {
         localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
         setuser('admin')
      }
      else if(Authdata)
      {
        const employee = Authdata.employee.find((e)=>email ==e.email && password == e.password);
        if(employee)
        {
          setloggedInUserdata(employee);
          setuser('employee');
            localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))
         
        }


          
       
      }
      else
      {
        alert('Invalid Data');
      }
  }
 
  return (
    <>
     {!user ? <Login handlelogin={handlelogin}/>: ''}
      {user =='admin' ? <AdminDashboard/> : ''}
      {user == 'employee' ? <EmployeeDashboard data={loggedInUserdata}/> : null}
    </>
  )
}

export default App
