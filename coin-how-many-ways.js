function howManyWays(target, coins) {
  const memo = {}; // <target, ways>

  memo[0] = 1;

  for (let i = 1; i <= target; i++) {
    memo[i] = 0;

    for (const coin of coins) {
      const subproblem = i - coin;

      if (subproblem < 0) {
        continue;
      }

      memo[i] = memo[i] + memo[subproblem];
    }
  }

  return memo[target];
}

console.log(howManyWays(5, [1, 4, 5]));
console.log(howManyWays(87, [1, 4, 5, 8]));
