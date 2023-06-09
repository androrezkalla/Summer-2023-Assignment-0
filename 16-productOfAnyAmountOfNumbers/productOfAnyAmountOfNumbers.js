function productOfAnyAmountOfNumbers(...args) {
  if (args.length === 0) {
    return 0;
  }

  let product = 1;
  for (let i = 0; i < args.length; i++) {
    product *= args[i];
  }
  return product;
}



// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;