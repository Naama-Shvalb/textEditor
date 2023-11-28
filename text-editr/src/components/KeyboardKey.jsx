import {textManager} from '../TextManager'

export const KeyboardKey = ({ char, onKeyClick}) => {

    const handleClick = () => {
        if( char === '⌫'){
            textManager.chars.pop();
       }
       else{
        textManager.addChar(char);
       }
        console.log('textBox', textManager);
        onKeyClick(Math.random());
    }

    return (<button onClick = {handleClick}>{char}</button>);

};