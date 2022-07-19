// Given a positive sorted array a = [ 3, 4, 6, 9, 10, 12, 14, 15, 17, 19, 21 ];
// Define a function f(a, x) that returns x, the next smallest number, or -1 for errors.
// i.e.
// f(a, 12) = 12
// f(a, 13) = 12

const googleFe = require("./google-fe.js");

const a = [3, 4, 6, 9, 10, 12, 14, 15, 17, 19, 21];

test("Invalid inputs", () => {
  expect(googleFe(null, 12)).toBe(-1);
  expect(googleFe([], 12)).toBe(-1);
});

test("Ideal inputs", () => {
  // ideal:
  expect(googleFe(a, 12)).toBe(12);
  // ideal (lower number):
  expect(googleFe(a, 11)).toBe(10);
});

test("Edge cases", () => {
  // // min:
  expect(googleFe(a, 3)).toStrictEqual(3);
  // // max:
  expect(googleFe(a, 21)).toStrictEqual(21);
  // // min - 1:
  expect(googleFe(a, 2)).toStrictEqual(-1);
  // // max + 1:
  expect(googleFe(a, 22)).toStrictEqual(21);
  // // max ++:
  expect(googleFe(a, 50)).toStrictEqual(-1);
});
