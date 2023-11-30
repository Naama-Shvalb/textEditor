export class TextElement {
    value: string;
    size: number;
    color: string;

    constructor({value, size, color}) {
        this.value = value;
        this.size = size;
        this.color = color;
    }
}

export class TextManager {
    chars: TextElement[] = [];
    previousChars: TextElement[][]= [];
    activeColor = 'black';
    activeSize = 18;
    upperCase = false;

    addChar(char: string) {
        if (this.upperCase) {
                char = char.toUpperCase();
        }
        const charObj: TextElement = new TextElement({
            value: char,
            size: this.activeSize,
            color: this.activeColor,
        })
       this.chars.push(charObj);
       this.previousChars.push(this.chars);
    }

    setActiveColor(color: string) {
        this.activeColor = color;
    }

    setActiveSize(size: number) {
        this.activeSize += size;
    }

    activeUpperCase(){
        this.upperCase = !this.upperCase;
    }
}


export const textManager = new TextManager();
