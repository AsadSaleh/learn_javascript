const arr = [
  1, 2, 3, 4, 10, 50, 123, 885, 1029, 102948, 747192, 759348, 9399999,
];

function checkIfTargetInArray(arr, target) {
  const middleIdx = Math.floor(arr.length / 2);
  const middleValue = arr[middleIdx];

  if (arr.length === 0) {
    return false;
  }

  if (middleValue === target) {
    return true;
  }

  if (middleValue > target) {
    return checkIfTargetInArray([...arr].slice(0, middleIdx), target);
  }

  return checkIfTargetInArray([...arr].slice(middleIdx, undefined), target);
}

console.log(checkIfTargetInArray(arr, 885));

function getSqrt(n) {
  // Expectation:
  // getSqrt(4) == 2
  // getSqrt(2) == 1.4....
  // getSqrt(10) == 3.16...
  // getSqrt(0) == 0
  // getSqrt(-1) throw error.
  // Logic (pseudo-code):
  // Implementation:
}
