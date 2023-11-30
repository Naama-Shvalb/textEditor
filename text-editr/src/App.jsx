import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Keyboard } from './components/keyboard'
import { TextView } from './components/TextView'
import { ChangeStyle } from './components/ChangeStyle'
import { ChangeAll } from './components/ChangeAll'
import { textManager } from './TextManager'


function App() {
  const [clickedChar, setClickedChar] = useState('');
  //const [currentUpperCase, setCurrentUpperCase] = useState(false);

  console.log('app render')


  return (
    <>
      <pre><TextView /></pre>
      <Keyboard language={'Hebrew'} onKeyClick={setClickedChar} />
      <div><ChangeStyle/></div>
      <ChangeAll onChangeAll = {setClickedChar}/>
    </>
  )
}  
export const previousChars = new Array();
export default App
