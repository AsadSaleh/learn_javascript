const reverseString = require("./soal1");

test("reverse hello", () => {
  expect(reverseString("apel")).toBe("lepa");
  expect(reverseString("hello")).toBe("olleh");
});
