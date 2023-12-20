import React,{ useState } from 'react';
import {textManager} from '../TextManager'


export const ChangeAll = ({onChangeAll}) => {

    const handleUpperCase = (current) => {
            textManager.copyPrevious();
            if(current){
                changeToUpper();
            } else {
                changeToLower();
            }
    }
        
    const changeToUpper = () => {
        onChangeAll(Math.random());
        textManager.chars.map((char)=>{
            char.value=char.value.toUpperCase();
        })
    }

    const changeToLower = () => {
        onChangeAll(Math.random());
        textManager.chars.map((char)=>{
            char.value=char.value.toLowerCase();
        })
    }

    const handleRemove = () => {
        onChangeAll(Math.random());
        textManager.chars=[];
    }

    const handleUndo = () =>{
        onChangeAll(Math.random());
        textManager.chars = textManager.Undo();
        console.log("chars now:",textManager.chars);

    }

    return (<>
        <button onClick={()=>handleUpperCase(true)}>UPPER CASE</button>
        <button onClick={()=>handleUpperCase(false)}>lower case</button>
        <button onClick={()=>handleRemove()}>REMOVE ALL</button>
        <button onClick={()=>handleUndo()}>Undo</button>
    </>
    )
}