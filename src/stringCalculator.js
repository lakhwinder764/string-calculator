function add(numbers) {
  if (!numbers) return 0;
  return parseInt(numbers, 10); // Convert the string to a number
}

module.exports = { add };
