import React, { act, useReducer } from 'react'
import './App.css'

function App() {
  const[state,dispatch] = useReducer(reducer,{count:0})
    function reducer(state,action)
    {
      switch(action.type)
      {
        case 'increament':
          return {count:state.count+1}
        case 'decreament':
          return {count:state.count-1} 
        case 'reset':
          return {count:state.count=0}
          default:
      }
    }
  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={()=>dispatch({type:'increament'})}>+</button>
      <button onClick={()=>dispatch({type:'decreament'})}>-</button>
      <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
    </>
  )
}

export default App
