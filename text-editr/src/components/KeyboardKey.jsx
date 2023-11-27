import {presentChars} from '../char'

export const KeyboardKey = ({char, onKeyClick}) => {

    const handleClick = () => {
        onKeyClick(() =>{
            //console.log('prev', prev)
            if (char === '⌫') {
                presentChars.pop();
            } 
            if(char == '⏎'){
                presentChars + "\n";
            }else {
                 
                console.log('presentChars', presentChars)
                presentChars.push(char);
            }            
        });
    }

    return (<button onClick = {handleClick}>{char}</button>);

};