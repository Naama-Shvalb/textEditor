import React, { useState } from 'react';
import { KeyboardKey } from './KeyboardKey';




export const Keyboard = ({ onKeyClick }) => {

    const hebrew = [
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '⌫'],
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", '\\', '⏎'],
        ['`', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'],
        [' ']
    ];
    const english = [
        ['/', '׳', 'ק', 'ר', 'א', 'ט', 'ו', 'ן', 'ם', 'פ', '⌫'],
        ['ש', 'ד', 'ג', 'כ', 'ע', 'י', 'ח', 'ל', 'ך', 'ף', ',', 'ֿ', '⏎'],
        [';', 'ז', 'ס', 'ב', 'ה', 'נ', 'מ', 'צ', 'ת', 'ץ', '.'],
        [' ']
    ];

    const [activeLang, setActiveLang] = useState('english');


    const handleClick = () => {
        setActiveLang(activeLang === 'hebrew' ? 'english': 'hebrew');
    }

    const activeKeyboard = activeLang === 'hebrew' ? hebrew : english;
  
  return (
    <div className="keyboard">
        <div>
        {activeKeyboard[0].map((char, index) => (
            <KeyboardKey char = {char} onKeyClick = {onKeyClick} />
        ))}
        </div>
        <div>
        {activeKeyboard[1].map((char, index) => (
            <KeyboardKey char = {char} onKeyClick = {onKeyClick}/>
        ))}
        </div>
        <div>
        {activeKeyboard[2].map((char, index) => (
            <KeyboardKey char={char} onKeyClick = {onKeyClick} />
            ))}
        </div>
        <div>
        {activeKeyboard[3].map((char, index) => (
            <KeyboardKey char={char} onKeyClick = {onKeyClick} />
        ))}
        </div>
        <div>
            <button onClick = {handleClick}>
                {activeLang}
            </button>
        </div>
    </div>
  );
};
