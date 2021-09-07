/*
Cari angka yang ada di parameter kedua, di dalam grup.
utamakan grup yang paling sedikit.

output yang diharapkan adalah "design" karena ia mengandung angka 3 dan paling sedikit.
*/

function findInGroup(group, target) {
  // 1. loop though every entry of the map
  // 2. for each entry, check the array, does it contain the "target",
  //    if it does, save the key name and the length; if length < previous length, replace the temp.
  // 3. return the temp.
  let temp = ["", Infinity];

  for (const key in group) {
    const isIncluded = includes(group[key], target);
    const length = group[key].length;
    if (isIncluded && length < temp[1]) {
      temp = [key, group[key].length];
    }
  }

  return temp[0];
}

function includes(array, target) {
  for (const v of array) {
    if (v === target) {
      return true;
    }
  }
  return false;
}

module.exports = findInGroup;
