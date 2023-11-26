export class Char {
    value: string;
    size: number;
    color: string;

    constructor({value, size, color}) {
        this.value = value;
        this.size = size;
        this.color = color;
    }
}

export const presentChars: Char[] = [];