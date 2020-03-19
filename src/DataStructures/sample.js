function merge(left, right) {
  let leftIndex = 0;
  let rightIndex = 0;
  let result = [];
  console.log(left, right)
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  let mid = Math.floor(arr.length/2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([4,5,6,9,1,3,12,7]));