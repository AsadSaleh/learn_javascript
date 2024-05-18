const a = 1103;
const c = 1234;
const m = 2 ** 31;

function RecursiveRandomNumberGenerator(n, seed = 1) {
  if (n === 0) {
    return seed;
  }

  const prev = RecursiveRandomNumberGenerator(n - 1, seed);

  const newRand = (a * prev + c) % m;

  return newRand;
}
