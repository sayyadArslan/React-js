import React from "react";
import './App.css';
//import Box from "./box.jsx";
import Counter from "./counter";
const App=()=>
{
      const arr = [
        {name:"Arslan",No:1},
        {name:"Subhan",No:2},
        {name:"Talha",No:3},
      ]

  
  return(
        <div>
          
          <Counter/>
           {
             /* arr.map((item, index) => {
                console.log(item.name, item.No);
                return <Box key={index} name={item.name} No={item.No}/>
              })*/
            }
        </div>
      )
}
export default App;