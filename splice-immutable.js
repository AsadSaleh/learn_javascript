const baseState = [
  {
    title: "Belajar HTML & CSS",
    done: true,
  },
  {
    title: "Belajar JavaScript",
    done: false,
  },
  {
    title: "Belajar React",
    done: false,
  },
];

// Ubah item ke-2 dari done:false menjadi done: true

// 1. Pakai splice
// baseState.splice(1, 1, {
//   title: "Belajar JavaScript",
//   done: true,
// });

// console.log("baseState: ", baseState);

const arrayBaru = baseState.map(function (item, index) {
  // Kalau item ke-2 (index = 1) ubah done menjadi true.
  if (index === 1) {
    return {
      ...item,
      done: true,
    };
  } else {
    // Return apa adanya (kondisi semula).
    return item;
  }
});

console.log("baseState: ", baseState);
console.log("arrayBaru: ", arrayBaru);
