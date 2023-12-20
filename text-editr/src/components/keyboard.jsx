// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { KeyboardKey } from './KeyboardKey';




// eslint-disable-next-line react/prop-types
export const Keyboard = ({ onKeyClick }) => {

    const english = [
        ['!','1','2','3','4','5','6','7','8','9','0','-'],
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '⌫'],
        ['CL','a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", '\\', '⏎'],
        ['`', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'],
        [' ']
    ];
    const hebrew = [
        ['!','1','2','3','4','5','6','7','8','9','0','-'],
        ['/', '׳', 'ק', 'ר', 'א', 'ט', 'ו', 'ן', 'ם', 'פ', '⌫'],
        ['ש', 'ד', 'ג', 'כ', 'ע', 'י', 'ח', 'ל', 'ך', 'ף', ',', 'ֿ', '⏎'],
        [';', 'ז', 'ס', 'ב', 'ה', 'נ', 'מ', 'צ', 'ת', 'ץ', '.'],
        [' ']
    ];

    const emojis = [
        ['😀', '😄', '😁', '😆', '😅', '🤣', '👍', '🙂','🫠','🫶'],
        ['🙃', '😉', '😊', '😇', '🥰', '😍', '🤩', '😘', '🤕','👏','⌫'],
        ['😗', '😚', '😙', '😋', '😛', '😜', '🤪', '🫥' ,'🙏','⏎'],
        ['😝', '🤑', '🤗', '🤭', '🤫', '🤔', '😪', '🤤', '😴', '😷', '🤒',  '😎'],
        [' ']
    ];

    const [activeLang, setActiveLang] = useState('english');

    const handleClick = () => {
        if (activeLang === 'english') {
            setActiveLang('hebrew');
        } else if (activeLang === 'hebrew') {
            setActiveLang('emojis');
        } else {
            setActiveLang('english');
        }
    };

    const setActiveKeyboard = () => {
        if (activeLang === 'english') {
            return english;
        }
        if (activeLang === 'hebrew') {
            return hebrew;
        }
        return emojis;
    };
    const activeKeyboard = setActiveKeyboard();
  
  return (
    <div className="keyboard">
        <div>
        {activeKeyboard[0].map((char) => (
            <KeyboardKey key = {char} keyCode = {char} char = {char} onKeyClick = {onKeyClick} />
        ))}
        </div>
        <div>
        {activeKeyboard[1].map((char) => (
            <KeyboardKey  key = {char} keyCode = {char} char = {char} onKeyClick = {onKeyClick}/>
        ))}
        </div>
        <div>
        {activeKeyboard[2].map((char) => (
            <KeyboardKey key = {char} keyCode = {char} char={char} onKeyClick = {onKeyClick} />
            ))}
        </div>
        <div>
        {activeKeyboard[3].map((char) => (
            <KeyboardKey key = {char} keyCode = {char} char={char} onKeyClick = {onKeyClick} />
        ))}
        </div>
        <div>
        {activeKeyboard[4].map((char) => (
            <KeyboardKey key = {char} keyCode = "space" char = {char} onKeyClick = {onKeyClick} />
        ))}
        </div>
        <div>
            <button onClick = {handleClick}>
            {activeLang === 'english' ? 'עברית' : activeLang === 'hebrew' ? '😀' : 'English'}
            </button>
        </div>
    </div>
  );
};
