function quickSort(arr) {
  if (arr.length === 0) {
    return [];
  }
  var left = [],
    right = [],
    pivot = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    }else{
        right.push(arr[i]);
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
}
let k = 2;
let res = quickSort([4,2,6,5,3,9]);
console.log(res);
console.log(res[res.length - k]);