// Problem given an array of integers, sort the array.
// Poor sorting alg and is mainly used as an intro to sorting algs.

function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}

const array = [24,30,1,2,99,100]
bubbleSort(array)

console.log(array)
