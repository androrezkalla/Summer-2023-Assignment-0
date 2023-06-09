class MySolution {
  constructor() {
    this.flag = false;
  }

  binarySearch(nums, target) {
    const binarySearchRecursive = (start, end) => {
      if (start > end) {
        return false;
      }

      const mid = Math.floor((start + end) / 2);

      if (nums[mid] === target) {
        return true;
      } else if (target < nums[mid]) {
        return binarySearchRecursive(start, mid - 1);
      } else {
        return binarySearchRecursive(mid + 1, end);
      }
    };

    return binarySearchRecursive(0, nums.length - 1);
  }
}


// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;