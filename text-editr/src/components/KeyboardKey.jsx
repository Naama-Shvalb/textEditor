import {presentChars} from '../char'

export const KeyboardKey = ({char, onKeyClick}) => {

    const handleClick = () => {
        onKeyClick((prev) =>{
            console.log('prev', prev)
            if (char === '⌫') {
                return prev.slice(0, -1);
            } 
            if(char == '⏎'){
                return prev + "\n";
            }else {
                presentChars.push(char);
                console.log('presentChars', presentChars)
            }            
        });
    }

    return (<button onClick = {handleClick}>{char}</button>);

};