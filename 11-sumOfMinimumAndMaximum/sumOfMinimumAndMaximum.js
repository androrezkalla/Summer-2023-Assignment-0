function sumOfMinimumAndMaximum(nums) {
  const min = Math.min(...nums);
  const max = Math.max(...nums);
  return min + max;
}


// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;