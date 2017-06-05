function diffArray(arr1, arr2) {
  let res1 = arr2.filter( val => {
    return arr1.indexOf(val) < 0;
  });

  let res2 = arr1.filter( val => {
    return arr2.indexOf(val) < 0;
  });

  return res1.concat(res2);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
