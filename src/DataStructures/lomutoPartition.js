function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function partitionLomuto(arr, left, right){
    let i = left;
    let pivot = right;

    for(var j=left; j < right; j++){
        if(arr[j] <= arr[pivot]){
            swap(arr, i, j);
            i++;
        }
    }
    swap(arr, i , j);
    return i;
}

function quickSort(arr,left,right){
    if(left < right){
        let pivot = partitionLomuto(arr,left,right);
        if( left === right){
            return;
        }
        quickSort(arr, left, pivot - 1);
        quickSort(arr, pivot + 1, right);
    }
    return arr;
}

console.log(quickSort([3,1,4,2],0,3))