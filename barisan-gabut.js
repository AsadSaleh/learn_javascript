// barisan: 0 1 1 3 4 5 9 7 16  9  ...
// n:       1 2 3 4 5 6 7 8  9 10 ...

const isGenap = (n) => n % 2 === 0;

function barisanGabutKeN(n) {
  if (isGenap(n)) {
    return n - 1;
  }
  if (n === 1) return 0;

  return Math.floor(n / 2) ** 2;
}

// assert.equal(barisanGabutKeN(1), 0);
// assert.equal(barisanGabutKeN(2), 1);
// assert.equal(barisanGabutKeN(3), 1);
// assert.equal(barisanGabutKeN(4), 3);
// assert.equal(barisanGabutKeN(5), 4);
// assert.equal(barisanGabutKeN(6), 5);
// assert.equal(barisanGabutKeN(7), 9);
// assert.equal(barisanGabutKeN(8), 7);
// assert.equal(barisanGabutKeN(9), 16);
// assert.equal(barisanGabutKeN(10), 9);

// assert.equal(barisanGabutKeN(11), 25);
// assert.equal(barisanGabutKeN(12), 11);
// assert.equal(barisanGabutKeN(13), 36);
// assert.equal(barisanGabutKeN(14), 13);
// assert.equal(barisanGabutKeN(20), 19);
// assert.equal(barisanGabutKeN(50), 49);
// assert.equal(barisanGabutKeN(100), 99);
