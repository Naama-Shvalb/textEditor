/* eslint-disable react/prop-types */
import {textManager} from '../TextManager'

export const KeyboardKey = ({ keyCode, char, onKeyClick}) => {

    const handleClick = () => {

        if( char === '⌫'){
            textManager.chars.pop();
       }else if(char === 'CL'){
            textManager.activeUpperCase();
       } else{
        textManager.addChar(char);
       }
        console.log('textBox', textManager);

        onKeyClick(Math.random());
        
        console.log("prev",textManager.previousChars);

    }

    return (<button className = {keyCode} onClick = {handleClick} >{char}</button>);

};