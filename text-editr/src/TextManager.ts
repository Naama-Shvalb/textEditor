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
    activeColor = 'black';
    activeSize = 10;

    addChar(char: string) {
        const charObj: TextElement = new TextElement({
            value: char,
            size: this.activeSize,
            color: this.activeColor
        })
       this.chars.push(charObj);
    }

    setActiveColor(color: string) {
        this.activeColor = color;
    }

    setActiveSize(size: number) {
        this.activeSize = size;
    }
}


export const textManager = new TextManager();