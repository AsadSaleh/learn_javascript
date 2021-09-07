/*
	groupSimilar({ programmer: [1, 2, 3], analyst: [1, 2, 3], design: [3, 4] })

	[["programmer", "analys"], ["design"]]

*/

function groupSimilar(obj) {
  let temp = {};

  for (const key in obj) {
    // tukeran, key jadi value, value jadi key(dijadiin string dulu):
    const newKey = obj[key].toString();
    const newValue = key;

    // mulai looping. masukin ke temp. kalau udah ada, concat!
    if (temp.hasOwnProperty(newKey)) {
      const currentValue = temp[newKey];
      temp[newKey] = currentValue.concat(newValue);
    } else {
      temp[newKey] = [newValue];
    }
  }

  // const result = Array.from(temp).map(([stringKey, value]) => [
  //   stringKey.split(","),
  //   value,
  // ]);
  const result = Object.values(temp);

  console.log(result);
  return result;
}

module.exports = {
  groupSimilar,
};
