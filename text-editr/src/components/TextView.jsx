import {textManager} from '../TextManager'

export const TextView = () => {
    console.log(textManager.previousChars);
    return(
        <>
        {textManager.chars.map((c, index) => {
           if(c.value === '⏎'){
            return '\n';
           }
           return <span style={{color: c.color, fontSize: c.size}}>{c.value}</span>;
           })}
        </>
    )
}