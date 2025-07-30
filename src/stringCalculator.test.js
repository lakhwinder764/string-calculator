const { add } = require("./stringCalculator");

test("returns 0 for empty string", () => {
  expect(add("")).toBe(0);
});

test("returns the number itself if only one number", () => {
  expect(add("4")).toBe(4);
});
test("returns sum for two or more numbers", () => {
  expect(add("1,2,6,7,5,67,4,6,4,6")).toBe(108);
});
