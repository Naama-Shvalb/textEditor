export class TextElement {
    value: string;
    size: number;
    color: string;
    isUpperCase: boolean;

    constructor({value, size, color, isUpperCase}) {
        this.value = value;
        this.size = size;
        this.color = color;
        this.isUpperCase = isUpperCase;
    }
}

export class TextManager {
    chars: TextElement[] = [];
    previousChars: TextElement[][]= [];
    activeColor = 'black';
    activeSize = 18;
    isUpperCase = false;

    private deepCopyTextElements(elements: TextElement[]): TextElement[] {
        return elements.map((element) => {
          return new TextElement({
            value: element.value,
            size: element.size,
            color: element.color,
            isUpperCase: element.isUpperCase,
          });
        });
      }
    
      copyPrevious() {
        const copiedChars = this.deepCopyTextElements(this.chars);
        this.previousChars.push(copiedChars);
      }
    
    
    // copyPrevious() {
    //   const copiedChars = this.chars.map((char)=>char);
    //    this.previousChars.push(copiedChars);
    // }

    Undo(): TextElement[]{
      const tempChars = this.previousChars[this.previousChars.length - 2];
      this.previousChars.pop();
      return tempChars;
    }

    addChar(char: string) {
        if (this.isUpperCase) {
                char = char.toUpperCase();
        }
        const charObj: TextElement = new TextElement({
            value: char,
            size: this.activeSize,
            color: this.activeColor,
            isUpperCase: this.isUpperCase
        })
       this.chars.push(charObj);
       this.copyPrevious();
    }

    setActiveColor(color: string) {
        this.activeColor = color;
    }

    setActiveSize(size: number) {
        this.activeSize += size;
    }

    activeUpperCase(){
        this.isUpperCase = !this.isUpperCase;
    }
}


export const textManager = new TextManager();
