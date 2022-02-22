// import function from local file
const findShortestString = require("./find-shortest-string");

test("findshorteststring finds the shortest string in an array", () => {
  expect(findShortestString(["hey", "is", "a", "exciting", "adventure"])).toBe(
    "a"
  );
  expect(findShortestString(["why", "hello", "to", "you"])).toBe("to");
});

test("findshortest returns the earlier string in cases of joint shortest strings", () => {
  expect(findShortestString(["short", "films"])).toBe("short");
  expect(findShortestString(["song", "see", "zero", "sam"])).toBe("see");
  expect(findShortestString(["matt", "john", "zara"])).toBe("matt");
});
