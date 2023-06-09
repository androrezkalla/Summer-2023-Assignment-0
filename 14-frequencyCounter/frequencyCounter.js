function frequencyCounter(word) {
  const frequency = {};
  for (let char of word) {
    if (frequency[char]) {
      frequency[char]++;
    } else {
      frequency[char] = 1;
    }
  }
  return frequency;
}


// Do not edit this line;
module.exports = frequencyCounter;