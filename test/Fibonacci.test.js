//assignment
// ## Fibonacci
// * Implement the fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, ... // fibonacci means all the item in the array is the sum of the previous ones!!!
// * Input: n = 5 // it should return the first 5 elements
// * Output: [0, 1, 1, 2, 3]

import {expect} from "chai";
import Fibonacci from "../source/fibonacci";
describe("Fibonacci", () => {
  it("shall exist",() => {
      let fibonacci = new Fibonacci();
      expect(fibonacci).to.be.defined;

  });

});