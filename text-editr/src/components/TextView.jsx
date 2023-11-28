import {textManager} from '../TextManager'

export const TextView = () => {
    return(
        <>
        {textManager.chars.map((c, index) => {
           if(c.value === '⏎'){
            return '\n';
           }
           return <span style={{color:c.color}}>{c.value}</span>;
           })}
        </>
    )
}