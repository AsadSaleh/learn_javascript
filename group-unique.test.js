const groupUnique = require("./group-unique");

const a = [["a"], ["b", "b", "b", "b"], ["c", "c", "c", "c"], ["d", "d", "d"]];
const d = [
  ["a", "a", "a", "a", "a"],
  ["b", "b", "b", "b"],
  ["c", "c", "c", "c"],
  ["d", "d", "d"],
];

test("basic test", () => {
  expect(groupUnique(a)).toStrictEqual(["a", "b", "c", "d"]);
  expect(groupUnique(d)).toStrictEqual([
    "a",
    "b",
    "c",
    "d",
    "a",
    "b",
    "c",
    "d",
    "a",
    "b",
    "c",
    "d",
  ]);
});
