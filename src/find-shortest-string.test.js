const findShortestString = require("./find-shortest-string");

test("findShortestString will find the shortest string in an array", () => {
  expect(findShortestString(["this", "is", "how", "I", "feel"])).toBe("I");
  expect(findShortestString(["jollof", "long", "grain"])).toBe("long");
});

test("findShortestString will find return the earlier string in case there is a joint shortest string", () => {
  expect(findShortestString(["hello", "table", "foxes"])).toBe("hello");
});
