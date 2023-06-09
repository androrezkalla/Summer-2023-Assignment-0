function isPalindrome(word) {
  
  const length = word.length;
  const middle = Math.floor(length / 2);

  for (let i = 0; i < middle; i++) {
    if (word[i] !== word[length - 1 - i]) {
      return false;
    }
  }

  return true;
}


// Do not edit this line;
module.exports = isPalindrome;