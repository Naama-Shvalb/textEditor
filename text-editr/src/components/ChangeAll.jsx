import React, { useState } from 'react';
import {textManager} from '../TextManager'


export const ChangeAll = ({onChangeAll}) => {

    const handleUpperCase = (current) => {
            onChangeAll(Math.random());
            if(current){
                textManager.chars.map((char, index)=>{
                    char.value=char.value.toUpperCase();
                })
            } else {
                textManager.chars.map((char, index)=>{
                    char.value=char.value.toLowerCase();
                })
            }
        }

    const handleRemove = () => {
        onChangeAll(Math.random());
        textManager.chars=[];
    }

    return (<>
        <button onClick={()=>handleUpperCase(true)}>UPPER CASE</button>
        <button onClick={()=>handleUpperCase(false)}>lower case</button>
        <button onClick={()=>handleRemove()}>REMOVE ALL</button>
    </>
    )
}