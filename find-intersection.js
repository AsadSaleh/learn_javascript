/*

Given two integer arrays nums1 and nums2, write a function to return an array of their intersection. 
Each element in the result must be unique and you may return the result in any order.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]

Example 2:
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4] or [4,9]

Example 3:
Input: nums1 = [1, 2, 2, 4, 5, 10, 11, 12, 13, 14, 15, 16, 100, 150, 400, 404], 
                                ^j
       nums2 = [4, 5, 6, 8, 150]
                      ^i
                      
      nums1= [1,2,2,4]
               ^
      nums2= [2,2,4]
             ^

*/

// m = arr1.length, n = arr2.length

// Time complexity:
// O(m) + O(n)

function findIntersectionSorted(arr1, arr2) {
  let res = [];
  let j = 0;
  for (let i = 0; i < arr2.length; i++) {
    for (; j < arr1.length; j++) {
      // If it's a match:
      if (arr2[i] === arr1[j]) {
        res.push(arr2[i]);
        break;
      } else if (arr2[i] < arr1[j]) {
        // If it's smaller than current arr2[i]:
        break;
      } else {
        // If its' bigger than current arr2[i]:
      }
    }
  }

  return res;
}

console.log(findIntersectionSorted([1, 2, 2, 1], [2, 2]));
console.log(findIntersectionSorted([4, 9, 5], [9, 4, 9, 8, 4]));

// First solution:
// 1. Create a "lookup" object
// 2. Filter the 2nd array based on that object:
function findIntersection(arr1, arr2) {
  const lookupObj = {};
  for (let i = 0; i < arr1.length; i++) {
    lookupObj[arr1[i]] = true;
  }

  const resultArray = [];
  for (let i = 0; i < arr2.length; i++) {
    const currentEl = arr2[i];
    if (lookupObj[currentEl]) {
      // Push the element to the array:
      resultArray.push(currentEl);
      // We set the lookupObj element to false:
      lookupObj[currentEl] = false;
    }
  }

  // console.log("Result: ", resultObj)

  return resultArray;
}

console.log(findIntersection([1, 2, 2, 1], [2, 2]));
console.log(findIntersection([4, 9, 5], [9, 4, 9, 8, 4]));

// time complexity:
// O(n + m)

// space complexity:
// O(n + m)
