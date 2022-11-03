function twoSums(nums, target) {
    let sorted = nums.sort((a, b) => a - b);
    
    let left = 0
    let right = nums.length - 1;

    let sum = sorted[left] + sorted[right];
    while (sum !== target) {
        if (sum > target) {
            right = right - 1;
        } else if (sum < target) {
            left = left + 1;
        }
        sum = sorted[left] + sorted[right]
    }
    return [left, right]
};

const target = 9
const input = [15, 3, 2, 10, 1, 7, 4]

console.log(twoSums(input, target))