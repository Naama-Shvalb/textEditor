import React, { useState } from 'react';
import {textManager} from '../TextManager'


export const ChangeAll = (onChangeAll) => {

    //const [currentUpperCase, setCurrentUpperCase] = useState(false);
    const handleUpperCase = (isUpperCase) => {
        
            textManager.chars.map((char, index)=>{
                char.upperCase = isUpperCase;
                if(isUpperCase){
                    char.value=char.value.toUpperCase();
                } else{
                    char.value=char.value.toLowerCase();
                }             
            })
            onChangeAll(Math.random());
        }
    const handleDelete=()=>{
        textManager.chars=[];
    }


    return (<>
        <button onClick={()=>handleDelete("deleteAll")}>remove all</button>
        <button onClick={()=>handleUpperCase(true)}>UPPER CASE</button>
        <button onClick={()=>handleUpperCase(false)}>lower case</button>
        
    </>
    )
}