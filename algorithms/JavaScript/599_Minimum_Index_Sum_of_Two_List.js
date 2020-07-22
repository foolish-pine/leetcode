const findRestaurant = (list1, list2) => {
  const arr = list1
    .filter((x) => list2.indexOf(x) !== -1)
    .sort(
      (a, b) =>
        list1.indexOf(a) +
        list2.indexOf(a) -
        (list1.indexOf(b) + list2.indexOf(b))
    );
  return arr.filter(
    (x) =>
      list1.indexOf(x) + list2.indexOf(x) ===
      list1.indexOf(arr[0]) + list2.indexOf(arr[0])
  );
};
