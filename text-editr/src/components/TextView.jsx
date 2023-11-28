import {textManager} from '../TextManager'

export const TextView = () => {

    return(
        <>

        {textManager.chars.map((c, index) => {
           if(c.value === '⏎'){
            return '\n';
           }
            return <>{c.value}</>;
    })}
        </>

    )



    
}