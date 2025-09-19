import { createContext, React,useState } from 'react'
import './App.css'
import { useContext } from 'react';
import A from './A';
export const name  = createContext();

function App() {
  const [count, setCount] = useState('Sherazi');

  return(
      <name.Provider value={count}>
        <A/>
      </name.Provider>
  )
}

export default App
