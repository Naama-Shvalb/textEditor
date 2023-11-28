import React, { useState } from 'react';
import {textManager} from '../TextManager'

export const ChangeColor = () => {
    const [currentColor, setCurrentColor] = useState('black');
    const handleClick = (color) => {
        setCurrentColor(color);
    }
    textManager.activeColor == currentColor;
  
    return <>
    <button onClick={() => handleClick('red')}>
        {"red"}
      </button>
    {/* // <button onClick={handleClick('yellow')}>
    //     {"yellow"}
    // </button>
    // <button onClick={handleClick('black')}>
    //     {"black"}
    // </button> */}
    </>
}