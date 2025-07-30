function add(numbers) {
  if (!numbers) return 0;
  if (typeof numbers === "string") {
    if (numbers === "") return 0;
    const nums = numbers.split(",").map(Number);
    return nums.reduce((sum, n) => sum + n, 0);
  }
  // If it's not a string (original array behavior)
  return numbers.reduce((sum, n) => sum + n, 0);
}

module.exports = { add };
