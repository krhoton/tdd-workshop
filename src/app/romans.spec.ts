import { Romans } from "./romans";

describe("Roman numerals", () => {
  it("Should convert '1' to 'I'", () => {
    /*ARRANGE**/
    const numerals: Romans = new Romans();
    
    /*ACT**/
    const value: string = numerals.convert(1);
    
    /*ASSERT**/
    expect(value).toBe("I");
  });
  
  it("Should convert '3' to 'III'", () => {
    /*ARRANGE**/
    const numerals: Romans = new Romans();
    
    /*ACT**/
    const value: string = numerals.convert(3);
    
    /*ASSERT**/
    expect(value).toBe("III");
  });
});
