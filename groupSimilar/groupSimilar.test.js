const groupSimilarModule = require("./groupSimilar");

const { groupSimilar } = groupSimilarModule;

test("Check group similar function", () => {
  expect(
    groupSimilar({ programmer: [1, 2, 3], analyst: [1, 2, 3], design: [3, 4] })
  ).toStrictEqual([["programmer", "analyst"], ["design"]]);
});
