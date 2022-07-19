// const d = [
//   ["a", "a", "a", "a", "a"],
//   ["b", "b", "b", "b"],
//   ["c", "c", "c", "c"],
//   ["d", "d", "d"],
// ];

//should return ['a', 'b', 'c', 'd', 'a', 'b', 'c', 'd', 'a', 'b', 'c', 'd' ]

function groupUnique(array) {
  let smallestLength = Infinity;
  for (let i = 0; i < array.length; i++) {
    smallestLength = Math.min(smallestLength, array[i].length);
  }

  let temp = [];
  for (let j = 0; j < smallestLength; j++) {
    for (let i = 0; i < array.length; i++) {
      temp.push(array[i][j]);
    }
  }

  return temp;
}

module.exports = groupUnique;
