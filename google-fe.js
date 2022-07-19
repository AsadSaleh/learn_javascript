// Given a positive sorted array a = [ 3, 4, 6, 9, 10, 12, 14, 15, 17, 19, 21 ];
// Define a function f(a, x) that returns x, the next smallest number, or -1 for errors.
// i.e.
// f(a, 12) = 12
// f(a, 13) = 12

// TODO: can be improved with binary search.
// But this solution is working good.
function googleFe(arr, x) {
  // safety net:
  if (!arr || !x) {
    return -1;
  }
  if (arr.length === 0) return -1;

  let previousNum = -1;
  let res = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > x) {
      res = previousNum;
      break;
    }
    if (arr[i] === x) {
      res = arr[i];
      break;
    }
    if (arr[i] < x) {
      previousNum = arr[i];
    }
    if (i === arr.length - 1) {
      if (arr[i] + 1 === x) {
        res = arr[i];
        break;
      }
    }
  }

  return res;
}

module.exports = googleFe;
