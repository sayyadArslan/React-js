import React, { useState } from 'react';
import './App.css'

const  App = () => {
  const [Email,SetEmail] = useState('');
  const [Password,setpassword] = useState('');
  const submit  = (e)=>{
    e.preventDefault();
    console.log(Email,Password);
  }


  return (
    <div>
        <form onSubmit={submit}>
          <input type='text' 
          placeholder='Enter Email' value={Email} onChange={(e)=>SetEmail(e.target.value)}  />
          <input type='text' placeholder='Enter Password'
            value={Password} onChange={(e)=>setpassword(e.target.value)}
          />
          <input type='submit' value='Submit'></input>
        </form>
    </div>
  )
}
export default App;
