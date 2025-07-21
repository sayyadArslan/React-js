import React, { useState,useCallback,useEffect} from "react";

const App = ()=>
{
  const[password,setpassword]=useState("");
  const[length,setlength]=useState(8);
  const[numberallowed,setnumberallowed]=useState(false);
  const[charallowed,setcharallowed]=useState(false);

  let passwordgenerator = useCallback(()=>
  {
      let pass  = ""
      let str  = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if(numberallowed) str += "0123456789"
      if(charallowed) str += "!@#$%^&*(){}|/.,<>?/*+-";

      for(let i= 1; i<=length; i++)
      {
        let char = Math.floor(Math.random() * str.length + 1);
        pass += str.charAt(char);
      }
      
      setpassword(pass);
  },[length,numberallowed,charallowed,setpassword]);
    
  useEffect(()=>{
      passwordgenerator();
    },[charallowed,numberallowed,setpassword,length,passwordgenerator])
  
  
  
    return(
      <div className="main">
          <h1>Password Generator</h1>
          <div className="pass">
              <input type="text" value={password} placeholder="Password" readOnly ></input>
              <div className="options">
                <div className="range">
                  <input type="range" min={8} max={100} onChange={(e)=>setlength(e.target.value)}></input>
                  <label>Length</label>
                </div>
                 <div className="opt">
                  <input type="checkbox" defaultChecked={numberallowed} 
                    onChange={()=>{setnumberallowed((prev)=>!prev)}} >
                  </input>
                     <label>Number</label>
                </div>
                 <div className="opt">
                  <input type="checkbox" defaultChecked={charallowed} 
                    onChange={()=>{setcharallowed((prev)=>!prev)}} >
                  </input>
                     <label>Character</label>
                </div>
                </div>
              </div>
      </div>
      
  )
}
export default App;