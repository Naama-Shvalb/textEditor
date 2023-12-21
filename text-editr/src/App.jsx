import { useState } from 'react'
import './App.css'
import { Keyboard } from './components/keyboard'
import { TextView } from './components/TextView'
import { ChangeStyle } from './components/ChangeStyle'
import { ChangeAll } from './components/ChangeAll'

function App() {
  const [clickedChar, setClickedChar] = useState('');
  return (
    <>
      <pre className='textView' ><TextView /></pre>
      <Keyboard language={'Hebrew'} onKeyClick={setClickedChar} />
      <div><ChangeStyle/></div>
      <ChangeAll onChangeAll = {setClickedChar}/>
    </>
  )
}  
export default App
