import {textManager} from '../TextManager'

export const KeyboardKey = ({ char, onKeyClick}) => {

    const handleClick = () => {
        if( char === '⌫'){
            textManager.chars.pop();
       }else if(char === 'CL'){
            textManager.activeUpperCase();
       } else{
        textManager.addChar(char);
       }
        console.log('textBox', textManager);

        ///
        onKeyClick(Math.random());
        let a=[];
        textManager.chars.map((char,index)=>{
            a[index] = char;
        })
        App.previousChars.push(a);
        /////
        //textManager.previousChars.push(textManager.chars);
        console.log("prev",textManager.previousChars);

    }

    return (<button className = "key" onClick = {handleClick}>{char}</button>);

};