function sumAll(arr) {
  let a = arr[0];
  let b = arr[1];
  let newArr = [];

  if (a < b) {
    for (let i = a; i <= b; i++) {
      newArr.push(i);
    }
  } else {
    for (let i = b; i <= a; i++) {
      newArr.push(i);
    }
  }



  return newArr.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
}

console.log(sumAll([1, 4]));
