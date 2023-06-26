import formatInput from "./formatInput.js";

describe("formatInput", () => {
  test("should return as is if length is less than 3", () => {
    expect(formatInput("12")).toBe("12");
  });
  test("should add parenthesis when length is greater than 2", () => {
    expect(formatInput("123")).toBe("(123)");
    expect(formatInput("123456")).toBe("(123)456");
  });
  test("should add dash after after the 6th digit when length is greater than 6", () => {
    expect(formatInput("1234567")).toBe("(123)456-7");
    expect(formatInput("1234567890")).toBe("(123)456-7890");
  });
});
