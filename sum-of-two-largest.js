function sumOfTwoLargest(array) {
  let largest = 0;
  let secondLargest = 0;

  if (!array) {
    return 0;
  }

  for (const num of array) {
    if (num >= largest) {
      // set the largest to num & move the previous largest to second largest
      const temp = largest;
      largest = num;
      secondLargest = temp;
    } else if (num >= secondLargest) {
      // set the second largest to num
      secondLargest = num;
    }
  }

  const result = largest + secondLargest;

  // console.log(`largest=${largest} + second=${secondLargest} = ${result}`);

  return result;
}

module.exports = sumOfTwoLargest;
