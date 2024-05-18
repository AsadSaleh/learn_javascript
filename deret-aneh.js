function getDeretAnehKeN(n) {
  const u1 = 3;
  const delta = penumlahanKeNDeret2(n);
  return u1 + delta;
}

// mencari penjumlahan n suku pertama dari deret 2, 4, 6, 8...
function penumlahanKeNDeret2(n) {
  const un = sukuKeNDeret2(n);
  const u1 = 0;
  return ((u1 + un) * n) / 2;
}

// mencari suku ke-n dari deret 2, 4, 6, 8...
function sukuKeNDeret2(n) {
  return (n - 1) * 2;
}
