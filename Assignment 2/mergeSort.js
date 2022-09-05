//Build a function the takes in an array and returns a sorted array, using a recursive merge sort methodology.

const unsorted = [4, 8, 6, 2, 1, 7, 5, 3, 9];

const mergeSort = (arr) => {
  //Base case: array is divided into its smallest unit
  if (arr.length < 2) {
    return arr;
  }
  // Divide the array into subarrays
  const middle = Math.floor(arr.length / 2);
  let a = mergeSort(arr.slice(0, middle));
  let b = mergeSort(arr.slice(middle));
  // Sort each subarray
  let i = 0;
  let n = 0;
  let c = [];
  while (i < a.length && n < b.length) {
    if (a[i] < b[n]) {
      c.push(a[i]);
      i++;
    } else {
      c.push(b[n]);
      n++;
    }
  }
  //If an array is empty, push the remaining elements of the other array
  if (i >= a.length && n < b.length) {
    c = c.concat(b.slice(n));
  } else if (n >= b.length && i < a.length) {
    c = c.concat(a.slice(i));
  }
  return c;
};

mergeSort(unsorted);
