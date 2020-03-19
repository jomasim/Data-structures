// print all sub arrays with zero sum;
// using brute force;
// note subarrays means contigous values

function printSubArrays(arr) {
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
        sum +=arr[j];
        if(sum === 0){
            console.log(arr.slice(i,j+1));
        }
    }
  }
}

console.log(printSubArrays([4,2,-3,-1,0,4]));