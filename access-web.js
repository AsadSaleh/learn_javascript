fetch("https://www.infradigital.io")
  .then((res) => {
    console.log(res);
    if (!res.ok) {
      return false;
    }
    return true;
  })
  .then(console.log);
