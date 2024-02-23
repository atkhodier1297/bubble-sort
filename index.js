// Problem given an array of integers, sort the array.
// Poor sorting alg and is mainly used as an intro to sorting algs.

function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > arr[i-1]) {
            let temp = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = temp
        }
    }
}
