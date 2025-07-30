const { add } = require("./stringCalculator");

test("returns 0 for empty string", () => {
  expect(add("")).toBe(0);
});

test("returns the number itself if only one number", () => {
  expect(add("4")).toBe(4);
});
