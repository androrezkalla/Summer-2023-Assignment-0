function setUnionOfAnyAmountOfSets(...args) {
  const unionSet = new Set();
  args.forEach((set) => {
    set.forEach((value) => {
      unionSet.add(value);
    });
  });
  return unionSet;
}


// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;