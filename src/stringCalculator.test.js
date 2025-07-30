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
test("supports newlines as separators", () => {
  expect(add("1\n2,3")).toBe(6);
});

test("supports custom delimiter", () => {
  expect(add("//;\n1;2")).toBe(3);
});
test("throws error on negative numbers", () => {
  expect(() => add("1,-2,3,-4")).toThrow("negative numbers not allowed -2,-4");
});
