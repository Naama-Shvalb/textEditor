import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Keyboard } from './components/keyboard'
import { TextView } from './components/TextView'
import { ChangeColor } from './components/changeColor'


function App() {
  //const [count, setCount] = useState(0)
  const [clickedChar, setClickedChar] = useState('');
  console.log('app render')



  return (
    <>
      <pre><TextView /></pre>
      <Keyboard language={'Hebrew'} onKeyClick={setClickedChar} />
      <div><ChangeColor/></div>
    </>
  )
}

export default App
