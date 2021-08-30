const nums = [6, 2, 4, 5, 3, 1, 4];

function findDuplicateWithSort(nums) {
  const newNums = [...nums].sort();
  for (i in newNums) {
    if (newNums[i] === newNums[i - 1]) {
      return true;
    }
  }
  return false;
}

function findDuplicateWithHashMap(nums) {
  const temp = {};
  for (num of nums) {
    if (temp[num]) {
      return true;
    }
    temp[num] = 1;
  }
  return false;
}

function findDuplicateWithFloydsTortoiseAndHare(nums) {
  let tortoise = nums[0];
  let hare = nums[0];

  // this is the weird algorithm that will detect the repeating number.
  while (true) {
    console.log({ tortoise, hare });
    tortoise = nums[tortoise]; // nums[1] = 2       // nums[2] = 3 			 // nums[3]      = 4  // nums[4]      = 1
    hare = nums[nums[hare]]; // nums[nums[1]] = 3 // nums[nums[3]] = 1  // nums[nums[1]] = 3 // nums[nums[3]] = 1
    if (tortoise === hare) {
      break;
    }
  }

  console.log({ tortoise }); // ?? unknown value

  let ptr1 = nums[0]; // 6
  let ptr2 = tortoise; // 3

  while (ptr1 !== ptr2) {
    console.log({ ptr1, ptr2 }, "\n");
    ptr1 = nums[ptr1]; // nums[1]=4
    ptr2 = nums[ptr2]; // nums[4]=3
  }

  return ptr1;
}

// console.log(findDuplicateWithSort(nums));
// console.log(findDuplicateWithHashMap(nums));
console.log("the double: ", findDuplicateWithFloydsTortoiseAndHare(nums));
