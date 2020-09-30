// Exercise 7
//
// Part 1 - Write
// ---------------
// Write a function that accepts an array with 2 values,
// and returns a new string made of the original string repeated by the provided number of times.
//
// - The first value of the array must be a string, and the second a number.
// - If a negative number or zero is specified, return an empty string.
// - If any invalid parameters are supplied return undefined.
//
// example: repeat(['foo', 3]) returns 'foofoofoo'

function repeat(arr) {
  // Your code here
  const [repeatme, times] = arr;
  let ans = ""
  if(typeof repeatme !== "string" || isNaN(times) || !Array.isArray(arr) || repeatme.length < 1){
    return undefined
  } else if(times <= 0){ return ""}
  for(let t = 1; t <= times; t++){
      ans += repeatme
  }
  return ans
}

// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = repeat;

console.log(
  repeat(["mike",0])
)
