export class Romans {

  convert(num: number): string {
    let numeral: string = "";
    for (let i: number = 0; i < num; i++) {
      numeral += 'I';
    }
    return numeral;
  }
}
