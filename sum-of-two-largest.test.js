const sumOfTwoLargest = require("./sum-of-two-largest");

test("basic", () => {
  expect(sumOfTwoLargest()).toBe(0);
  expect(sumOfTwoLargest([])).toBe(0);
  expect(sumOfTwoLargest([1])).toBe(1);
  expect(sumOfTwoLargest([1, 1])).toBe(2);
});

test("complex", () => {
  expect(sumOfTwoLargest([1, 2, 3, 4, 5])).toBe(9);
  expect(sumOfTwoLargest([1, 2, 7, 19, 85, 27, 0, 75, 11])).toBe(160);
  expect(sumOfTwoLargest([99, 98, 97, 96, 95, 93])).toBe(197);
  expect(sumOfTwoLargest([60, 75, 40, 35, 20, 15, 90, 65])).toBe(165);
});
