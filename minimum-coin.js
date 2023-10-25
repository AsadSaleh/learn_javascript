const memo = {};

function minimumCoin(m, coins) {
  if (memo[m]) {
    return memo[m];
  }

  if (m == 0) {
    return 0;
  }

  let answer = Infinity;

  // For loop
  for (let coin of coins) {
    let subproblem = m - coin;
    if (subproblem < 0) {
      continue;
    }
    // Recursive
    answer = Math.min(answer, minimumCoin(subproblem, coins) + 1);

    // Memoization
    memo[m] = answer;
  }
  return answer;
}

// console.log(minimumCoin(4, [1, 4, 5]));
// console.log(minimumCoin(9, [1, 4, 5]));
// console.log(minimumCoin(13, [1, 4, 5]));
// console.log(minimumCoin(15, [1, 4, 5]));
// console.log(minimumCoin(150, [1, 4, 5]));

function minimumCoinBottomUp(m, coins) {
  const memo = {}; // <m, result>

  memo[0] = 0;

  for (let i = 1; i <= m; i++) {
    for (const coin of coins) {
      let subproblem = i - coin;
      if (subproblem < 0) {
        continue;
      }
      memo[i] = Math.min(memo[i] ?? Infinity, memo[subproblem] + 1);
    }
  }

  return memo[m];
}

console.log(minimumCoinBottomUp(4, [1, 4, 5]));
console.log(minimumCoinBottomUp(9, [1, 4, 5]));
console.log(minimumCoinBottomUp(13, [1, 4, 5]));
console.log(minimumCoinBottomUp(15, [1, 4, 5]));
console.log(minimumCoinBottomUp(150, [1, 4, 5]));
