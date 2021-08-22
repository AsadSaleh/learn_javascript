var movies = [
  {
    id: 70111470,
    title: "Die Hard",
    boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: 4.0,
    bookmark: [],
  },
  {
    id: 654356453,
    title: "Bad Boys",
    boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: 5.0,
    bookmark: [{ id: 432534, time: 65876586 }],
  },
  {
    id: 65432445,
    title: "The Chamber",
    boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: 4.0,
    bookmark: [],
  },
  {
    id: 675465,
    title: "Fracture",
    boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: 5.0,
    bookmark: [{ id: 432534, time: 65876586 }],
  },
];

// Soal 3: Saya mau arrayBaru dengan bentuk { id, title } cuma hanya movie yang ratingnya = 5.0
// const arrayBaru = [
//   {
//     id: 654356453,
//     title: "Bad Boys",
//   },
//   {
//     id: 675465,
//     title: "Fracture",
//   },
// ];

// Hint: gunakan .filter(), lalu gunakan .map()

// Hint dari Soal 2:
// const arrayBaru = newReleases.map(function (item, index) {
//   const objekBaru = {
//     id: item.id,
//     title: item.title,
//   };
//   return objekBaru;
// });

const filteredMovies = movies.filter(function (movie) {
  // Kalau mau lolos filter, return "true"
  if (movie.rating === 5.0) {
    return true;
  } else {
    // Kalau mau tidak lolos filter, return "false"
    return false;
  }
});

console.log("filteredMovies: ", filteredMovies);

const finalResult = filteredMovies.map(function (movie) {
  return {
    id: movie.id,
    title: movie.title,
  };
});

console.log("finalResult: ", finalResult);
