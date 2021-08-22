var newReleases = [
  {
    id: 70111470,
    title: "Die Hard",
    boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 654356453,
    title: "Bad Boys",
    boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
  },
  {
    id: 65432445,
    title: "The Chamber",
    boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 675465,
    title: "Fracture",
    boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
  },
];

// Soal 2: Buat arrayBaru dengan bentuk sebagai berikut:
// arrayBaru = [
//   { id: 70111470, title: "Die Hard" },
//   { id: 654356453, title: "Bad Boys" },
//   { id: 65432445, title: "The Chamber" },
//   { id: 675465, title: "Fracture" },
// ];

// Hint: Gunakan metode .map()

const arrayBaru = newReleases.map(function (item, index) {
  const objekBaru = {
    id: item.id,
    title: item.title,
    bookmarkId: item.bookmark.map((book) => book.id)[0],
  };
  return objekBaru;
});

console.log("arrayBaru: ", arrayBaru);

// Bonus: Dengan Arrow function

const arrayBaru2 = newReleases.map((item, index) => ({
  id: item.id,
  title: item.title,
  bookmarkId: item.bookmark.map((book) => book.id)[0],
}));
