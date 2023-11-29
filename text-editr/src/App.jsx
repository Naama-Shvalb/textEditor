import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Keyboard } from './components/keyboard'
import { TextView } from './components/TextView'
import { ChangeStyle } from './components/ChangeStyle'
import { ChangeAll } from './components/changeAll'
import { textManager } from './TextManager'


function App() {
  //const [count, setCount] = useState(0)
  const [clickedChar, setClickedChar] = useState('');
  console.log('app render')


  return (
    <>
      <pre><TextView /></pre>
      <Keyboard language={'Hebrew'} onKeyClick={setClickedChar} />
      <div><ChangeStyle/></div>
      <div><ChangeAll/></div>
    </>
  )
}  

export default App
