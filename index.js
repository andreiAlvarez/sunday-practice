//Merger function, which merges 2 sorted array into 1 sorted array
function merger(arr1, arr2) {
  let i = 0,
    j = 0,
    mergedArr = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) mergedArr.push(arr2[j++]);
    else mergedArr.push(arr1[i++]);
  }
  while (i < arr1.length) {
    mergedArr.push(arr1[i++]);
  }
  while (j < arr2.length) {
    mergedArr.push(arr2[j++]);
  }
  return mergedArr;
}
function mergeSort(array) {
  //Array of length 1 is sorted so we return the same array back
  if (array.length == 1) return array;

  //Break down the array to half from middle into left and right
  let middle = Math.floor(array.length / 2);
  let left = mergeSort(array.slice(0, middle));
  let right = mergeSort(array.slice(middle));

  //Return the merged sorted array
  return merger(left, right);
}

//Solution 2
//function mergeSort(array) {
//  if (array.length === 1) {
//    return array;
//  } else {
//    const splitIndex = Math.floor(array.length / 2);
//    return merge(
//      mergeSort(array.slice(0, splitIndex)),
//      mergeSort(array.slice(splitIndex))
//    );
//  }
  // Merge two sorted arrays
//  function merge(array1, array2) {
//    let merged = [];
//    while (array1.length && array2.length) {
//      if (array1[0] < array2[0]) {
//        merged.push(array1.shift());
//      } else if (array1[0] > array2[0]) {
//        merged.push(array2.shift());
//      } else {
//        merged.push(array1.shift(), array2.shift());
//      }
//    }
//    // After looping ends, one array is empty, and other array contains only
//    // values greater than all values in `merged`
//    return [...merged, ...array1, ...array2];
//  }
//}
