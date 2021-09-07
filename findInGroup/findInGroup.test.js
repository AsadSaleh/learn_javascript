const findInGroup = require("./findInGroup");

test("reverse hello", () => {
  expect(
    findInGroup({ programmer: [1, 2], analyst: [3, 4, 6], design: [3, 5] }, 3)
  ).toBe("design");

  expect(
    findInGroup(
      { programmer: [1, 2], analyst: [3, 4, 6], design: [3, 5, 6, 7] },
      3
    )
  ).toBe("analyst");

  expect(
    findInGroup(
      { programmer: [3], analyst: [3, 4, 6], design: [3, 5, 6, 7] },
      3
    )
  ).toBe("programmer");
});
