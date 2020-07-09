const destCity = (paths) => {
  const cityA = paths.map((city) => city[0]);
  const cityB = paths.map((city) => city[1]);
  for (city of cityB) {
    if (!cityA.includes(city)) return city;
  }
};
