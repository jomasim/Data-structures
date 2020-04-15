function duplicate(arr) {
  let xor = 0;
  for (let i = 0; i < arr.length; i++) {
    xor ^= arr[i];
  }
  return xor;
}

console.log(duplicate([1, 2, 2, 6, 6]));
