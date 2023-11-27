import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import { textbox } from './components/textbox'
import { Keyboard } from './components/keyboard'


function App() {
  //const [count, setCount] = useState(0)
  const [clickedChar, setClickedChar] = useState('');



  return (
    <>
      <pre>{clickedChar}</pre>
      <Keyboard language={'Hebrew'} onKeyClick={setClickedChar} />
    </>
  )
}

export default App
