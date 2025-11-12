import React from "react";
import UserContextProvider from "./context/UserContextProvider"
import Profile from "./components/Profile";
function App() {
  
  return (
    <>
    <UserContextProvider>
    <h1>Hello</h1>
      <Profile/>
    </UserContextProvider>
     
    </>
     
    
  )
}

export default App
