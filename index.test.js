const solution = require("./solution2");

const test = [5, 5, 2, 3, 5, 1, 6];

describe("forgotPassword()", () => {
  it("should return true", () => {
    //Another way to test a boolean
    expect(solution(test)).toEqual(4);
  });
});
