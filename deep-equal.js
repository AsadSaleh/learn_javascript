function deepEqual(a, b) {
  if (typeof b !== typeof a) {
    return false;
  }

  if (typeof b === "object") {
    if (Object.keys(b).length !== Object.keys(a).length) {
      return false;
    }

    if (Object.keys(b).length === 0) {
      return true;
    }

    for (const key in b) {
      return deepEqual(b[key], a[key]);
    }
  }

  if (a === b) {
    return true;
  }

  return false;
}

module.exports = deepEqual;
