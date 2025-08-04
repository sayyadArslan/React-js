import { useState } from 'react'
import './App.css';
import Box from './components/box';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='app'>
        <Box/>
    </div>
  )
}

export default App
