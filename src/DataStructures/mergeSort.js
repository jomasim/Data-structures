
function merge(left, right){
    let result = [];
    let rightIndex = 0;
    let leftIndex = 0;
    // merging time is linear => n-1 O(n)
    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            result.push(left[leftIndex]);
            leftIndex++;
        }else{
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
  // splitting time is logarithmic O(log n)
  let mid = Math.floor(arr.length/2);
  let left = arr.slice(0,mid);
  let right = arr.slice(mid);

  // continue splitting and merging recursively
  return merge(mergeSort(left), mergeSort(right))
}


// overall time complexity us O(n log n ) linear logarithmic
// space is O(n) height of the  binary tree

console.log(mergeSort([1,5,2,8,9]));