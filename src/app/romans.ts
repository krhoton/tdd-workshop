const ROMAN_SYMBOLS: Array<[string, string, string]> = [
  [".", ".", "."],
  ["I", "V", "X"],
  ["X", "L", "C"],
  ["C", "D", "M"],
  ["M", "?", "?"],
]

export class Romans {

  convert_digit(num: number, ones: string, fives: string, tens: string): string {
    let result: string = "";
    if (num === 9) return ones+tens;
    if (num > 5) {
      result += fives;
      num -= 5;
    };
    if (num === 4) return ones+fives;
    for (let i: number = 0; i < num; i++) {
      result += ones;
    }
    return result;
  }

  convert(num: number): string {
    let result: string = "";
    const stringNum: string = num.toString();
    let size: number = stringNum.length;
    for (let i: number = 0; i < size; i++) {
      result += this.convert_digit(parseInt(stringNum[i]), ...ROMAN_SYMBOLS[size-i])
    }
    return result;
  }
}
