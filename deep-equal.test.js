const deepEqual = require("./deep-equal.js");

test("basic", () => {
  expect(deepEqual("", "")).toBe(true);
  expect(deepEqual(5, 5)).toBe(true);
  expect(deepEqual([], [])).toBe(true);
  expect(deepEqual({}, {})).toBe(true);

  expect(deepEqual("10", 10)).toBe(false);
});

test("complex", () => {
  expect(deepEqual({ a: "lorem" }, { a: "lorem" })).toBe(true);
  expect(deepEqual({ a: "lorem" }, { b: "ipsum" })).toBe(false);
});
