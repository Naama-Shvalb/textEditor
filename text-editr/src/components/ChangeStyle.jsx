import React, { useState } from 'react';
import {textManager} from '../TextManager'

export const ChangeStyle = () => {
    //const [currentColor, setCurrentColor] = useState('black');
    const handleColor = (color) => {
        //setCurrentColor(color);
        textManager.setActiveColor(color)
    }

    const handleSize = (size) => {
        textManager.setActiveSize(size);
    }
    //textManager.setActiveColor(currentColor);

    return <>
    <div>
    <button onClick={() => handleColor('red')}>
        {"red"}
    </button>
    <button onClick={() => handleColor('yellow')}>
        {"yellow"}
    </button>
    <button onClick={() => handleColor('black')}>
        {"black"}
    </button>
    <button onClick={() => handleColor('blue')}>
        {"blue"}
    </button>
    </div>
    <div>
    <button onClick={() => handleSize(1)}>
        {"plusSize"}
    </button>
    <button onClick={() => handleSize(-1)}>
        {"minusSize"}
    </button>
    </div>
    
    </>
}