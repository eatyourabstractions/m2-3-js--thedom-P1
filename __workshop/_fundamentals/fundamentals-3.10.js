// Exercise 10
// -------------
//
// Part 1 - Write
// ---------------
// Write a function that accepts a string and returns that string, capitalized.
// e.g. f("hello world"); // Hello World
// e.g. f("BACON BROCOLI"); // Bacon Brocoli

function makeIntoTitle(sentence) {
  // Your code here
  if (typeof sentence !== "string" || sentence.length === 0) {
    return undefined;
  }
  return sentence.split(" ").map(x => `${x[0].toUpperCase()}${x.substring(1)}`).join(" ")
}

// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = makeIntoTitle;

console.log(
  makeIntoTitle("mike matos")
)