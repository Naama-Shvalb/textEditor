import React, { useState } from 'react';
import {textManager} from '../TextManager'


export const ChangeAll = () => {

    //const [characters, setCharacters] = useState(textManager.chars);
    const handleUpperCase = () => {
        textManager.chars.map((char, index)=>{
            char.value.toUpperCase();
        })
    }

    const handleLowerCase = () => {
        textManager.chars.map((char, index)=>{
            char.value.toLowerCase();
        })
    }

    const handleClick = (click) => {
        switch (click){
            case 'deleteAll': 
                //textManager.chars=[];
                break;
            case 'upperCase':
                handleUpperCase();
                break;
            case 'lowerCase':
                handleLowerCase();


        };
    };


    return (<>
        <button onClick={handleClick("deleteAll")}>remove all</button>
        <button onClick={handleClick("upperCase")}>UPPER CASE</button>
        <button onClick={handleClick("lowerCase")}>lower case</button>
    </>
    )
}