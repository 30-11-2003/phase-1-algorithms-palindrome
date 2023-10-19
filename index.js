function reverse (word){
  return word.split("").reverse().join("");
}
function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord=reverse(word)
  return word===reversedWord;
}

/* 
  Add your pseudocode here
  reverse strings
  use an if/else statement
  if palindrome,return true
  if not palindrome,return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
