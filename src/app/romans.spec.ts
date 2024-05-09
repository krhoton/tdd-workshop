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
  
  it("Should convert '9' to 'IX'", () => {
    /*ARRANGE**/
    const numerals: Romans = new Romans();
    
    /*ACT**/
    const value: string = numerals.convert(9);
    
    /*ASSERT**/
    expect(value).toBe("IX");
  });

  it("Should convert '1066' to 'MLXVI'", () => {
    /*ARRANGE**/
    const numerals: Romans = new Romans();
    
    /*ACT**/
    const value: string = numerals.convert(1066);
    
    /*ASSERT**/
    expect(value).toBe("MLXVI");
  });

  it("Should convert '1989' to 'MCMLXXXIX'", () => {
    /*ARRANGE**/
    const numerals: Romans = new Romans();
    
    /*ACT**/
    const value: string = numerals.convert(1989);
    
    /*ASSERT**/
    expect(value).toBe("MCMLXXXIX");
  });
});
